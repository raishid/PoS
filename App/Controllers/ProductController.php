<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Category;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->limit(100)->get();
        $categories = Category::all();
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('products.index', true, ['products' => $products, 'categories' => $categories]);
    }

    public function products($page)
    {
        $count = Product::all()->count();
        $count_pages = ($count / 100) < 1 ? 1 : round($count / 100, 2);
        if($count_pages <= $page){
            return response()->json(array('status' => false, 'response' => 'No Data limit'));
        }
        $offset = $page == 1 ? 0 : ($page * 100) - 100;
        $limit = 100;
        $products = Product::offset($offset)->limit($limit)->get();
        return response()->json(array('products' => $products, 'page' => intval($page), 'next_page' => $page+1, 'last_page' => $count_pages));
    }

    public function create()
    {
        if(!input()->exists(['sku', 'name', 'category', 'stock', 'cost', 'price'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $image = input()->file('pic');
        if(isset($image)){
            if($image->getMime() === 'image/jpeg' || $image->getMime() === 'image/png' || $image->getMime() === 'image/jpg') 
            {
                $filename = sprintf('%s.%s', uniqid(), $image->getExtension());
                $relative_path = "/images/products/$filename";
                $destinationFilename = assets($relative_path);
                $relative_path = '/assets' . $relative_path;
                $image->move($destinationFilename);
            }
        }else{
            $relative_path = null;
        }
        
        $product = new Product();
        $product->sku = $data['sku'];
        $product->name = $data['name'];
        $product->description = isset($data['description']) ? $data['description'] : null;
        $product->category_id = $data['category'];
        $product->image = $relative_path;
        $product->stock = $data['stock'];
        $product->cost = $data['cost'];
        $product->price = $data['price'];
        $result = $product->save();
        
        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }
        
        $product = $product->with('category')->where('id', $product->id)->get();
        return response()->json(array('status' => true, 'response' => $product));

    }

    public function edit($id)
    {
        if(!input()->exists(['sku', 'name', 'category', 'stock', 'cost', 'price'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $image = input()->file('pic');
        $product = Product::find($id);

        if(isset($image)){
            if($image->getMime() === 'image/jpeg' || $image->getMime() === 'image/png' || $image->getMime() === 'image/jpg') 
            {
                $filename = sprintf('%s.%s', uniqid(), $image->getExtension());
                $relative_path = "/images/products/$filename";
                $destinationFilename = assets($relative_path);
                $relative_path = '/assets' . $relative_path;
                $image->move($destinationFilename);
                $product->image = $relative_path;
            }
        }
        
        $product->sku = $data['sku'];
        $product->name = $data['name'];
        $product->description = isset($data['description']) ? $data['description'] : null;
        $product->category_id = $data['category'];
        $product->stock = $data['stock'];
        $product->cost = $data['cost'];
        $product->price = $data['price'];
        $result = $product->save();
        
        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }
        
        $product = $product->with('category')->where('id', $product->id)->get();
        return response()->json(array('status' => true, 'response' => $product));
    }

    public function delete($id)
    {
        $result = Product::destroy($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $result));
    }
}