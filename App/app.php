<?php

use Pecee\Http\Middleware\BaseCsrfVerifier;
use Pecee\SimpleRouter\SimpleRouter;

class app
{
    public function load()
    {
        require_once 'App/Helpers/routingHelpers.php';
        define('ROOT_PATH', __DIR__);
        require_once 'routes/routes.php';
        SimpleRouter::setDefaultNamespace('\App\Controllers');
        SimpleRouter::csrfVerifier(new BaseCsrfVerifier());
        // Start the routing
        SimpleRouter::start();
    }
}