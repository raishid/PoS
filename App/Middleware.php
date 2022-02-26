<?php

namespace App;

use Pecee\Http\Request;
use Pecee\Http\Middleware\IMiddleware;

class Middleware implements IMiddleware {

    public function handle(Request $request): void 
    {
    
        $request->user = is_auth();

        if($request->user === NULL) {
            redirect(url('login.index'));
        }

    }
}