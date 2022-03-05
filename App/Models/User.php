<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class User extends Model
{
    protected $table = 'users';
    protected $fillable = ['name', 'username', 'role', 'pic', 'state', 'last_login'];
    public $timestamps = false;

    protected $hidden = ['password'];

}