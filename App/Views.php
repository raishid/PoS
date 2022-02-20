<?php

namespace App;

class Views
{
    public function loadView($controller, $view, $template = false, $data = '')
    {
        $controller = get_class($controller);
        if($view == 404){
            $content = '/' . $view;
        }else{
            $content = $controller . '/' .$view;
        }
        if($template){
            include 'views/template.php';
        }else{
            include 'views/'. $controller . '/' . $view . '.php';
        }
        
    }

    public function includeVar(string $layout)
    {
        $route = str_replace('.', '/', $layout);
        include 'views/'.$route.'.php';
    }
}