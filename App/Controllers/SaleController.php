<?php

namespace App\Controllers;

use App\Controller;

class SaleController extends Controller
{
    public function index()
    {
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('sales.index', true, []);
    }
}