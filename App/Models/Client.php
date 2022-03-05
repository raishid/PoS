<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'customers';
    protected $fillable = ['name', 'dni', 'email', 'phone', 'address', 'credit', 'bill', 'purchases', 'last_purchase'];

    protected $casts = [
        'last_purchase' => 'timestamp'
    ];

}