<?php

use App\Controller;
use App\Models\User;

class Login extends Controller
{
    public function index()
    {
        $users = new User();
        $users->name = 'test1';
        $users->username = 'username';
        $users->password = '12345';
        $users->role = '1';
        $users->pic = '';
        $users->state = 1;
        $users->date = date('Y-m-d H:i:s');
        $users->update(3);
        #$this->view->loadview($this, 'index');
    }
}