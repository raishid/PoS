<?php

namespace App;

use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;

class RoleAdminMiddleware implements IMiddleware
{
    public function handle(Request $request): void 
    {
        if(intval(auth()->role) !== 1){
            http_response_code(401);
            die();
        }

    }
}