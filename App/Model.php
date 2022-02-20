<?php

namespace App;

use config\db;

class Model
{
    protected $table;

    function __construct()
    {
        $this->db = new db($this->table);
    }    
}