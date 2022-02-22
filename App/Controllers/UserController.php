<?php

namespace App\Controllers;

use App\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return $this->view->loadview('login.index', true);
    }
}