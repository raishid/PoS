<body class="hold-transition sidebar-mini">

    <!-- open app -->
    <div id="app">
        <!-- Site wrapper -->
        <div class="wrapper">
            <!-- Navbar -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                </ul>

                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <!-- Navbar Search -->
                    <li class="nav-item">
                        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i class="fas fa-search"></i>
                        </a>
                        <div class="navbar-search-block">
                            <form class="form-inline">
                                <div class="input-group input-group-sm">
                                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                                    <div class="input-group-append">
                                        <button class="btn btn-navbar" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                </ul>

                <!-- User Profile -->
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user fs-3"></i>
                            <span class="hidden-xs">Admin</span>
                        </a>
                        <!-- Dropwdown-toggle profile -->
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li class="user-footer dropdown-item">
                                <a href="<?=url('login.logout')?>" class="btn btn-secondary">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </nav>
            <!-- /.navbar -->