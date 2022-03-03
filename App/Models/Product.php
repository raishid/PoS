<?php

namespace App\Models;

use App\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['sku', 'name', 'description', 'image', 'stock', 'cost', 'price'];
}