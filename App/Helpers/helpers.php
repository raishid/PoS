<?php

use Dotenv\Dotenv;

/* Global vars */

$load_datatable = false;
define('ENV', Dotenv::createImmutable(ROOT_PATH)->load());

/*    */

function startSession()
{
    ob_start();
    session_start();
}

function destroySession()
{
    session_destroy();
    ob_clean();
}

function end_flush()
{
    ob_flush();
}

function loadDatatable(){
    global $load_datatable;
    $load_datatable = true;
}

function isLoadDatatable(){
    global $load_datatable;
    return $load_datatable;
}

function Env(string $arg){
    try{
        return ENV[$arg];
    }catch(Exception $e){
        die($e->getMessage());
    }
}

function assets($path = ''){
    return ROOT_PATH . '/assets' . $path;
}