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
        $user = new User();
        $result = $user->verifyLogin($data['username'], $data['password'], ['username', 'password']);

        if($result){
            $_SESSION['auth'] = $result;
            $user->last_login = date("Y-m-d H:i:s");
            $user->update($result->id);
            return json_encode(array('status' => true, 'response' => $result));
        }else{
            return json_encode(array('status' => false, 'response' => ''));
        }

    }

    public function logout()
    {
        destroySession();
        redirect(url('login.index'));
    }
}