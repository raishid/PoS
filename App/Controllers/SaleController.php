<?php

namespace App\Controllers;

use DateTime;
use Carbon\Carbon;
use App\Controller;
use App\Models\Sale;
use App\Models\Client;
use App\Models\Product;

class SaleController extends Controller
{
    public function index()
    {   
        $last_month = Carbon::now()->subMonth(1);
        $now = Carbon::now();

        $sales = Sale::with('customer')
                    ->with('products')
                    ->with('seller')
                    ->whereBetween('created_at', [$last_month, $now])
                    ->orderBy('id', 'desc')
                    ->get();

        //load datable scripts
        loadDatatable();

        return $this->view->loadView('sales.index', true, ['sales' => $sales]);
    }

    public function rangeSale()
    {
        if(!input()->exists(['start_date', 'end_date'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $start_date = Carbon::createFromTimeString($data['start_date']);
        $end_date = Carbon::createFromTimeString($data['end_date']);

        return Sale::with('customer')
                ->with('products')
                ->with('seller')
                ->whereBetween('created_at', [$start_date, $end_date])
                ->orderBy('id', 'desc')
                ->get();
    }

    public function rangeDaySales()
    {
        if(!input()->exists(['start_date', 'end_date'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $start_date = Carbon::createFromTimeString($data['start_date']);
        $end_date = Carbon::createFromTimeString($data['end_date']);

        $sales = Sale::select('total', 'created_at')->whereBetween('created_at', [$start_date, $end_date])->get();
        $parseSales = array();
        foreach($sales as $sale){
            $format_to_day = Carbon::createFromTimeString($sale->created_at)->format('F_d_Y');
            $parseSales[$format_to_day] = 0;
        }
        foreach($sales as $sale){
            $format_to_day = Carbon::createFromTimeString($sale->created_at)->format('F_d_Y');
            $parseSales[$format_to_day] += $sale->total;
        }
        
        return response()->json($parseSales);
    }

    public function dataExcel()
    {
        if(!input()->exists(['start_date', 'end_date'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $start_date = Carbon::createFromTimeString($data['start_date']);
        $end_date = Carbon::createFromTimeString($data['end_date']);

        $sales = Sale::with('products')->with('seller')->with('customer')->whereBetween('created_at', [$start_date, $end_date])->get();
        
        return response()->json($sales);
    }

    public function create()
    {
        $products = Product::all();
        $customers = Client::all();
        $last_sale = Sale::latest()->first();
        if(!isset($last_sale)){
            $id_sale = strval(date('y') . '-' . '0001'); 
        }else{
            $id_sale = strval($last_sale->id_sale+1);
        }
        
        //load datable scripts
        loadDatatable();
        return $this->view->loadView('sales.create', true, ['products' => $products, 'customers' => $customers, 'id_sale' => $id_sale]);
    }

    public function sell()
    {
        if(!input()->exists(['id_sale', 'user_id', 'customer_id', 'tax', 'net', 'total', 'method', 'products'])){
            return http_response_code(400);
        }
        $data = input()->all();
        if($data['user_id'] != auth()->id){
            return http_response_code(401);
        }
        $products = json_decode($data['products']);
        $sale = new Sale();
        $sale->id_sale = str_replace('-', '', $data['id_sale']);
        $sale->user_id = $data['user_id'];
        $sale->customer_id = $data['customer_id'];
        $sale->tax = $data['tax'];
        $sale->net = $data['net'];
        $sale->total = $data['total'];
        $sale->method = $data['method'];
        $sale->id_transaction = !empty($data['id_transaction']) ? $data['id_transaction'] : null;
        $sale->save();
        
        //related products
        $products_relateds = array();
        foreach($products as $p){
            $products_relateds[$p->id] = array('quantity' => $p->quantity);
        }

        //subtract stock
        foreach($products as $p){
            $_product = Product::find($p->id);
            $_product->stock = ($_product->stock - $p->quantity);
            $_product->save();
        }

        //relaction products
        $sale->products()->sync($products_relateds);

        //save data customer
        $customer = Client::find($sale->customer_id);
        $customer->purchases = $customer->purchases + 1;
        $customer->last_purchase = new DateTime();
        $customer->save();
        

        return response()->json(array('status' => true, 'response' => 'Sale saved successfully.'));
        
    }
    
    public function edit($id)
    {
        $products = Product::all();
        $customers = Client::all();

        $sale = Sale::with('customer')->with('products')->with('seller')->where('id', $id)->get()->first();

        //load datable scripts
        loadDatatable();

        return $this->view->loadView('sales.edit', true, ['products' => $products, 'customers' => $customers, 'sale' => $sale]);
    }

    public function update($id)
    {
        if(!input()->exists(['id_sale', 'user_id', 'customer_id', 'tax', 'net', 'total', 'method', 'products'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $products = json_decode($data['products']);

        $sale = Sale::find($id);
        $last_products = $sale->products;

        $sale->id_sale = str_replace('-', '', $data['id_sale']);
        $sale->user_id = $data['user_id'];
        $sale->customer_id = $data['customer_id'];
        $sale->tax = $data['tax'];
        $sale->net = $data['net'];
        $sale->total = $data['total'];
        $sale->method = $data['method'];
        $sale->id_transaction = !empty($data['id_transaction']) ? $data['id_transaction'] : null;
        $sale->save();
        
        //related products
        $products_relateds = array();
        foreach($products as $p){
            $products_relateds[$p->id] = array('quantity' => $p->quantity);
        }

        //subtract stock
        foreach($products as $p){
            $_product = Product::find($p->id);
            if($last_products){
                $_product->stock = (($_product->stock + $p->pivot->quantity) - $p->quantity);   
            }else{
                $_product->stock = ($_product->stock - $p->pivot->quantity);
            }
            $_product->save();
        }

        //relaction products
        $sale->products()->detach();
        $sale->products()->sync($products_relateds);
        

        return response()->json(array('status' => true, 'response' => 'Sale saved successfully.'));
    }

    public function delete($id)
    {
        $sale = Sale::find($id);
        foreach($sale->products as $p){
            $quantity = $p->pivot->quantity;
            $p->stock = $p->stock + $quantity;
            $p->save();
        }

        $client = $sale->customer;
        $client->purchases = $client->purchases - 1;
        $client->save();

        $result = $sale->delete();

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $result));
    }

    public function report()
    {
        //load datable scripts
        loadDatatable();
        
        return $this->view->loadView('sales.report', true, []);
    }

    public function productMostSell()
    {

        if(!input()->exists(['start_date', 'end_date'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $start_date = Carbon::createFromTimeString($data['start_date']);
        $end_date = Carbon::createFromTimeString($data['end_date']);

        return Product::join('sales_products', 'products.id', '=', 'sales_products.product_id')
                ->join('sales', 'sales.id', '=', 'sales_products.sale_id')
                ->selectRaw('products.*, sum(sales_products.quantity) as sold')
                ->whereBetween('sales.created_at', [$start_date, $end_date])
                ->groupBy('products.id')
                ->orderby('sold', 'desc')
                ->take(10)
                ->get();
    }

    public function bestSeller()
    {
        if(!input()->exists(['start_date', 'end_date'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $start_date = Carbon::createFromTimeString($data['start_date']);
        $end_date = Carbon::createFromTimeString($data['end_date']);

        return Sale::join('users', 'sales.user_id', '=', 'users.id')
                ->selectRaw('users.name, sum(sales.total) as sold')
                ->whereBetween('sales.created_at', [$start_date, $end_date])
                ->groupBy('user_id')
                ->get();
    }

    public function bestClient()
    {
        if(!input()->exists(['start_date', 'end_date'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $start_date = Carbon::createFromTimeString($data['start_date']);
        $end_date = Carbon::createFromTimeString($data['end_date']);

        return Sale::join('customers', 'sales.customer_id', '=', 'customers.id')
                ->selectRaw('customers.name, sum(sales.total) as sold')
                ->whereBetween('sales.created_at', [$start_date, $end_date])
                ->groupBy('customer_id')
                ->get();
    }
}