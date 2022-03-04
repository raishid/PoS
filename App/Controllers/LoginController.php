<?php

namespace App\Controllers;

use App\Controller;
use App\Models\User;

class LoginController extends Controller
{
    public function index()
    {
        $this->view->loadview('login.index');
    }

    public function login()
    {
        $data = input()->all();
        $user = User::where('username', '=', $data['username'])->get();

        if(count($user) > 0){
            $user = $user[0];
            if(password_verify($data['password'], $user->password)){
                $_SESSION['auth'] = $user;
                $user->last_login = date("Y-m-d H:i:s");
                $user->save();
                return json_encode(array('status' => true, 'response' => $user));
            }
        }

        return json_encode(array('status' => false, 'response' => ''));

    }

    public function logout()
    {
        destroySession();
        redirect(url('login.index'));
    }
}