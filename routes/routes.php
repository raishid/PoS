<?php

use Pecee\Http\Request;
use App\Controllers\HomeController;
use App\Controllers\LoginController;
use App\Controllers\UserController;
use App\Middleware;
use Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::group(['middleware' => Middleware::class], function () {
    //HOME 
    SimpleRouter::get('/', [HomeController::class, 'index'])->name('index');
    //USERS
    SimpleRouter::get('/users', [UserController::class, 'index'])->name('users.index');
});



//LOGIN
SimpleRouter::get('/login', [LoginController::class, 'index'])->name('login.index');

//ajax login
SimpleRouter::post('/api/login', [LoginController::class, 'login']);

//LOGOUT
SimpleRouter::get('/logout', [LoginController::class, 'logout'])->name('login.logout');


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