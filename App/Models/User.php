<?php

namespace App\Models;

use App\Model;

class User extends Model
{
    protected $table = 'users';
    protected $fillable = ['name', 'username', 'password', 'role', 'pic', 'state', 'last_login', 'date'];

}