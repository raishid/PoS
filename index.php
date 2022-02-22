<?php

require_once 'vendor/autoload.php';
require_once 'App/app.php';

define('ROOT_PATH', __DIR__);

$app = new app();
$app->load();