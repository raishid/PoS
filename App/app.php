<?php

use Pecee\Http\Middleware\BaseCsrfVerifier;
use Pecee\SimpleRouter\SimpleRouter;

class app
{
    public function load()
    {
        require_once 'App/Helpers/routingHelpers.php';
        require_once 'routes/routes.php';
        require_once 'App/Helpers/helpers.php';

        startSession();
        
        SimpleRouter::setDefaultNamespace('\App\Controllers');
        SimpleRouter::csrfVerifier(new BaseCsrfVerifier());
        // Start the routing
        SimpleRouter::start();

        end_flush();
    }
}