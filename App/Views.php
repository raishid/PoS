<?php

namespace App;

class Views
{
    public function loadView(string $pathview, bool $template = false, array $data = [])
    {
        $this->data = $data;

        $pathview = str_replace('.', '/', $pathview);

        if($pathview == 404){
            $content = '404';
        }else{
            $content = $pathview;
        }
        
        if($template){
            include 'views/template.php';
        }else{
            include 'views/'. $pathview . '.php';
        }
        
    }

    public function includeVar(string $layout)
    {
        $data = $this->data;
        $route = str_replace('.', '/', $layout);
        include 'views/'.$route.'.php';
    }
}