<?php

namespace App;

use App\Views;

class Controller{

    public $view;

    public function __construct()
    {
        $this->view = new Views();
    }

    
}