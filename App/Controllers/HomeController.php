<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Sale;
use App\Models\Client;
use App\Models\Product;
use App\Models\Category;

class HomeController extends Controller
{

    public function index()
    {

        $sales = Sale::whereBetween('created_at', [date('Y-m-d 00:00:00'), date('Y-m-d 23:59:59')])->sum('total');
        $categories = Category::all()->count();
        $customers = Client::all()->count();
        $products = Product::all()->count();

        return $this->view->loadView('home.index', true, [
            'sales' => number_format($sales, 2),
            'categories' => $categories,
            'customers' => $customers,
            'products' => $products
        ]);
    }
}