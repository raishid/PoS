<?php

namespace App\Helpers;

class helpers
{
    static public function view(string $template, array $data = [])
    {
        include 'views/'.$template.'.php';
    }

    static function includeVar(string $layout)
    {
        $route = str_replace('.', '/', $layout);

        include 'views/'.$route.'.php';
    }
}