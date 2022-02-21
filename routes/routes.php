<?php

use App\Controllers\ExceptionController;
use Pecee\Http\Request;
use App\Controllers\HomeController;
use App\Controllers\LoginController;
use Pecee\SimpleRouter\SimpleRouter;

//HOME 
SimpleRouter::get('/', [HomeController::class, 'index']);

//LOGIN
SimpleRouter::get('/login', [LoginController::class, 'index']);

//ajax login
SimpleRouter::post('/api/login', [LoginController::class, 'login']);



SimpleRouter::get('/not-found', [ExceptionController::class, 'pageNoFound']);
SimpleRouter::get('/forbidden', [ExceptionController::class, 'pageNoFound']);

SimpleRouter::error(function(Request $request, \Exception $exception) {

    switch($exception->getCode()) {
        // Page not found
        case 404:
            response()->redirect('/not-found');
        // Forbidden
        case 403:
            response()->redirect('/forbidden');
    }
    
});