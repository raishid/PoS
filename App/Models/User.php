<?php

namespace App\Models;

use App\Model;

class User extends Model
{
    protected $table = 'users';
    protected $fillable = ['name', 'username', 'password', 'role', 'pic', 'state', 'last_login', 'date'];

    static public function is_auth()
    {
        if(isset($_SESSION['username']) && isset($_SESSION['password'])){
            return true;
        }else{
            return null;
        }
    }
}