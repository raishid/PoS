<?php

define('ROOT_PATH', __DIR__);


require_once 'vendor/autoload.php';
require_once 'App/app.php';

$app = new app();
$app->load();