<?php

use App\Controller;
use App\Models\User;

class Login extends Controller
{
    public function index()
    {
        $users = new User();
        $this->view->loadview($this, 'index');
    }
}