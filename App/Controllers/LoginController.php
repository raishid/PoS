<?php

namespace App\Controllers;

use App\Controller;
use App\Models\User;
use App\Request;

class LoginController extends Controller
{
    public function index()
    {
        $this->view->loadview('login.index');
    }

    public function login()
    {
        var_dump(input());
    }
}