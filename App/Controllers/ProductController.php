<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $model_products = new Product();
        $products = $model_products->list();
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('products.index', true, ['products' => $products]);
    }
}