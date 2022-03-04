<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Category;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $model_products = new Product();
        $products = $model_products->list();
        $model_categories = new Category();
        $categories = $model_categories->list();
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('products.index', true, ['products' => $products, 'categories' => $categories]);
    }
}