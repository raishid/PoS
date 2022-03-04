<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['sku', 'name', 'description', 'image', 'stock', 'cost', 'price'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}