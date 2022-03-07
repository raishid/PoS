<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $table = 'sales';
    protected $fillable = ['id_sale', 'total', 'method', 'id_transaction'];

    public function seller()
    {
        return $this->belongsTo(User::class);
    }
    
    public function products()
    {
        return $this->belongsToMany(Product::class, 'sales_products');
    }
    
    public function customer()
    {
        return $this->belongsTo(Client::class);
    }
}