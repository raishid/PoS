<?php

function startSession()
{
    ob_start();
    session_start();
}

function destroySession()
{
    session_destroy();
    ob_clean();
}

function end_flush()
{
    ob_flush();
}