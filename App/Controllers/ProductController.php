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
}