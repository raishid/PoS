<?php

use App\Controllers\ExceptionController;
use Pecee\Http\Request;
use App\Controllers\HomeController;
use App\Controllers\LoginController;
use App\Middleware;
use Pecee\SimpleRouter\SimpleRouter;


SimpleRouter::group(['prefix' => 'dashboard', 'middleware' => Middleware::class], function () {
    //HOME 
    SimpleRouter::get('/', [HomeController::class, 'index']);
});

//LOGIN
SimpleRouter::get('/login', [LoginController::class, 'index'])->name('login.index');

//ajax login
SimpleRouter::post('/api/login', [LoginController::class, 'login']);


SimpleRouter::error(function(Request $request, \Exception $exception) {

    switch($exception->getCode()) {
        // Page not found
        case 404:
            http_response_code(404);
            $request->setRewriteCallback('ExceptionController@pageNoFound');
        // Forbidden
        case 403:
            http_response_code(403);
            $request->setRewriteCallback('ExceptionController@pageNoFound');
    }
    
});