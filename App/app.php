<?php

use Pecee\Http\Middleware\BaseCsrfVerifier;
use Pecee\SimpleRouter\SimpleRouter;
use Illuminate\Database\Capsule\Manager as Capsule;

class app
{
    public function load()
    {
        require_once 'App/Helpers/helpers.php';
        require_once 'App/Helpers/routingHelpers.php';
        require_once 'routes/routes.php';

        $this->Eloquent();

        startSession();
        
        SimpleRouter::setDefaultNamespace('\App\Controllers');
        SimpleRouter::csrfVerifier(new BaseCsrfVerifier());
        // Start the routing
        SimpleRouter::start();

        end_flush();
    }

    public function Eloquent()
    {        
        $capsule = new Capsule();
        $capsule->addConnection([
        "driver"    =>      "mysql",
        "host"      =>      "127.0.0.1",
        "database"  =>      "pos",
        "username"  =>      "root",
        "password"  =>      ""
        ]);
        $capsule->setAsGlobal();
        $capsule->bootEloquent();
    }

}