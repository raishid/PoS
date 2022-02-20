<?php

use App\Controller;

class Home extends Controller
{
    public function index()
    {
        $this->view->loadView($this, 'index', true);
    }
}