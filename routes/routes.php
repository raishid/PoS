<?php

use App\Controllers\CategoryController;
use Pecee\Http\Request;
use App\Controllers\HomeController;
use App\Controllers\LoginController;
use App\Controllers\ProductController;
use App\Controllers\UserController;
use App\Middleware;
use Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::group(['middleware' => Middleware::class], function () {
    //HOME 
    SimpleRouter::get('/', [HomeController::class, 'index'])->name('index');
    //USERS
    SimpleRouter::get('/users', [UserController::class, 'index'])->name('users.index');
    SimpleRouter::post('/users/create', [UserController::class, 'create'])->name('users.create');
    SimpleRouter::post('/users/edit/{id}', [UserController::class, 'edit'])->name('users.edit');
    SimpleRouter::post('/users/state/update/{id}', [UserController::class, 'updateState'])->name('users.state.update');
    SimpleRouter::post('/users/delete/{id}', [UserController::class, 'delete'])->name('users.delete');

    //CATEGORIES
    SimpleRouter::get('/categories', [CategoryController::class, 'index'])->name('category.index');
    SimpleRouter::post('/categories/create', [CategoryController::class, 'create'])->name('category.create');
    SimpleRouter::post('/categories/edit/{id}', [CategoryController::class, 'edit'])->name('category.edit');
    SimpleRouter::post('/categories/delete/{id}', [CategoryController::class, 'delete'])->name('category.delete');

    //PRODUCTS
    SimpleRouter::get('/products', [ProductController::class, 'index'])->name('product.index');
    SimpleRouter::post('/products/create', [ProductController::class, 'create'])->name('product.create');
    SimpleRouter::post('/products/edit/{id}', [ProductController::class, 'edit'])->name('product.edit');
    SimpleRouter::post('/products/delete/{id}', [ProductController::class, 'delete'])->name('product.delete');
    SimpleRouter::get('/api/products/all/page/{page}', [ProductController::class, 'products'])->name('product.products');
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