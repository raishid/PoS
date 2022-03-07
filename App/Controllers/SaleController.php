<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Client;
use App\Models\Product;
use App\Models\Sale;

class SaleController extends Controller
{
    public function index()
    {
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('sales.index', true, []);
    }

    public function create()
    {
        $products = Product::all();
        $customers = Client::all();
        $last_sale = Sale::latest()->first();
        if(!isset($last_sale)){
            $id_sale = strval(date('y') . '-' . '0001'); 
        }else{
            $id_sale = strval(date('y') . '-' . ($last_sale->id_sale+1));
        }
        
        //load datable scripts
        loadDatatable();
        return $this->view->loadView('sales.create', true, ['products' => $products, 'customers' => $customers, 'id_sale' => $id_sale]);
    }
}