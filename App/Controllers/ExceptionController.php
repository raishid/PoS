<?php

namespace App\Controllers;

use App\Controller;

class ExceptionController extends Controller
{
    public function pageNoFound()
    {
        return $this->view->loadView(404, true);
    }
}