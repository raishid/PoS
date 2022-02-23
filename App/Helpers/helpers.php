<?php

/* Global vars */

$load_datatable = false;

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