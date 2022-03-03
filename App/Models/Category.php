<?php

namespace App\Models;

use App\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = ['name', 'description', 'created_at', 'updated_at'];
}