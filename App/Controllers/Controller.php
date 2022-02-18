<?php

namespace App\Controllers;

use App\Helpers\helpers;

class Controller{

    public function template()
    {
        helpers::view('home');
    }
}