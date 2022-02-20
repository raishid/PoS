<?php

use App\Views;

class Excepcion
{
    public function noFound()
    {
        $views = new Views();
        $views->loadView($this, 404);
    }
}