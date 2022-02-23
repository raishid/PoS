<?php

namespace App\Controllers;

use App\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $model_user = new User();
        $users = $model_user->list();

        return $this->view->loadview('users.index', true, ["users" => $users]);
    }
}