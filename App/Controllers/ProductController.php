<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Category;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        $categories = Category::all();
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('products.index', true, ['products' => $products, 'categories' => $categories]);
    }
}