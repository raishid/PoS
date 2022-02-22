<?php

/*
    head
    */

$this->includeVar('layouts.head');
?>

<body class="hold-transition login-page">
    <div id="app">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="/login" class="h1"><b>Admin PoS</b></a>
                </div>
                <div class="card-body">
                    <login-form csrf="<?=csrf_token()?>" ></login-form>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.login-box -->

        <?php
        /*
    footer
    */
        $this->includeVar('layouts.scripts');
        ?>

</body>

</html>