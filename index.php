<?php
require_once 'vendor/autoload.php';

define('ROOT_PATH', __DIR__);

$route = !empty($_GET['url']) ? $_GET['url'] : 'Home';

$array = explode('/', $route);
$controller = $array[0];
$method = 'index';
$parameters = '';

if(count($array) > 1){
    if( !empty($array[1] || $array[1] !== '') ){
        $method = $array[1];
    }
}


if(count($array) > 2){
    if(!empty($array[2]) || $array[2] != ''){
        for($i=2; $i<count($array); $i++){
            $parameters.= $array[$i] . ',';
    
        }
        $parameters = trim($parameters, ',');
    }
}

$fController = 'App/Controllers/' . $controller . 'Controller.php';


if(file_exists($fController)){
    require_once $fController;
    $controller = new $controller();
    if(method_exists($controller, $method)){
        call_user_func(array($controller, $method), array($parameters));
    }else{
        require_once 'App/Excepcion.php';
        http_response_code(404);
        $excepcion = new Excepcion();
        $excepcion->noFound();
    }
}else{
    require_once 'App/Excepcion.php';
    http_response_code(404);
    $excepcion = new Excepcion();
    $excepcion->noFound();
}