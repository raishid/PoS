<?php

use App\Middleware;
use Pecee\Http\Request;
use App\RoleAdminMiddleware;
use App\Controllers\HomeController;
use App\Controllers\SaleController;
use App\Controllers\UserController;
use App\Controllers\LoginController;
use Pecee\SimpleRouter\SimpleRouter;
use App\Controllers\ClientController;
use App\Controllers\ProductController;
use App\Controllers\CategoryController;
use App\Controllers\GeneratePDFController;
use App\RoleAssistantMiddleware;

SimpleRouter::group(['middleware' => Middleware::class], function () {
    //HOME 
    SimpleRouter::get('/', [HomeController::class, 'index'])->name('index');
    //USERS
    SimpleRouter::get('/users', [UserController::class, 'index'], ['middleware' => RoleAdminMiddleware::class])->name('users.index');
    SimpleRouter::post('/users/create', [UserController::class, 'create'], ['middleware' => RoleAdminMiddleware::class])->name('users.create');
    SimpleRouter::post('/users/edit/{id}', [UserController::class, 'edit'], ['middleware' => RoleAdminMiddleware::class])->name('users.edit');
    SimpleRouter::post('/users/state/update/{id}', [UserController::class, 'updateState'], ['middleware' => RoleAdminMiddleware::class])->name('users.state.update');
    SimpleRouter::post('/users/delete/{id}', [UserController::class, 'delete'], ['middleware' => RoleAdminMiddleware::class])->name('users.delete');

    //CATEGORIES
    SimpleRouter::get('/categories', [CategoryController::class, 'index'])->name('category.index');
    SimpleRouter::post('/categories/create', [CategoryController::class, 'create'], ['middleware' => RoleAssistantMiddleware::class])->name('category.create');
    SimpleRouter::post('/categories/edit/{id}', [CategoryController::class, 'edit'], ['middleware' => RoleAssistantMiddleware::class])->name('category.edit');
    SimpleRouter::post('/categories/delete/{id}', [CategoryController::class, 'delete'], ['middleware' => RoleAssistantMiddleware::class])->name('category.delete');

    //PRODUCTS
    SimpleRouter::get('/products', [ProductController::class, 'index'])->name('product.index');
    SimpleRouter::post('/products/create', [ProductController::class, 'create'], ['middleware' => RoleAssistantMiddleware::class])->name('product.create');
    SimpleRouter::post('/products/edit/{id}', [ProductController::class, 'edit'], ['middleware' => RoleAssistantMiddleware::class])->name('product.edit');
    SimpleRouter::post('/products/delete/{id}', [ProductController::class, 'delete'], ['middleware' => RoleAssistantMiddleware::class])->name('product.delete');
    SimpleRouter::get('/api/products/all/page/{page}', [ProductController::class, 'products'])->name('product.products');
    SimpleRouter::post('/api/products/lastest', [ProductController::class, 'lastest'])->name('product.lastest');

    //CLIENTS
    SimpleRouter::get('/customers', [ClientController::class, 'index'])->name('customer.index');
    SimpleRouter::post('/customers/create', [ClientController::class, 'create'])->name('customer.create');
    SimpleRouter::post('/customers/edit/{id}', [ClientController::class, 'edit'])->name('customer.edit');
    SimpleRouter::post('/customers/delete/{id}', [ClientController::class, 'delete'], ['middleware' => RoleAdminMiddleware::class])->name('customer.delete');

    //SALES
    SimpleRouter::get('/sales', [SaleController::class, 'index'])->name('sales.index');
    SimpleRouter::post('/sales/ranges', [SaleController::class, 'rangeSale']);
    SimpleRouter::get('/sales/create', [SaleController::class, 'create'])->name('sales.create');
    SimpleRouter::post('/sales/sell', [SaleController::class, 'sell'])->name('sales.sell');
    SimpleRouter::get('/sales/print/invoice/{id}', [GeneratePDFController::class, 'generate'])->name('sales.print.invoice');
    SimpleRouter::get('/sales/report', [SaleController::class, 'report'], ['middleware' => RoleAssistantMiddleware::class])->name('sales.report');
    SimpleRouter::post('/sales/report/excel', [SaleController::class, 'dataExcel'], ['middleware' => RoleAssistantMiddleware::class])->name('sales.excel');

    //Charts sales
    SimpleRouter::post('/sales/ranges/charts', [SaleController::class, 'rangeDaySales'], ['middleware' => RoleAssistantMiddleware::class]);
    SimpleRouter::post('/sales/products/mostsales', [SaleController::class, 'productMostSell'], ['middleware' => RoleAssistantMiddleware::class]);
    SimpleRouter::post('/sales/report/bestseller', [SaleController::class, 'bestSeller'], ['middleware' => RoleAssistantMiddleware::class]);
    SimpleRouter::post('/sales/report/bestclient', [SaleController::class, 'bestClient'], ['middleware' => RoleAssistantMiddleware::class]);


    //EDIT SALE
    SimpleRouter::get('/sales/edit/{id}', [SaleController::class, 'edit'], ['middleware' => RoleAdminMiddleware::class])->name('sales.edit');
    SimpleRouter::post('/sales/edit/{id}', [SaleController::class, 'update'], ['middleware' => RoleAdminMiddleware::class])->name('sales.edit');
    SimpleRouter::post('/sales/delete/{id}', [SaleController::class, 'delete'], ['middleware' => RoleAdminMiddleware::class])->name('sales.delete');

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