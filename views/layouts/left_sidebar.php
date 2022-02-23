 <!-- Main Sidebar Container -->
 <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="/assets/images/logo1.png" alt="AdminLTE Logo" class="brand-image-xl w-100 mh-100 elevation-3" style="opacity: .8">
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/assets/images/anonymous.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <li class="nav-item menu-open">
            <a href="<?=url('index')?>" class="nav-link active"><i class="fa fa-home"></i><p class="px-1">Home</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="<?=url('users.index')?>" class="nav-link"><i class="fa fa-user"></i><p class="px-1">Users</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="" class="nav-link"><i class="fa fa-th"></i><p class="px-1">Categories</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="" class="nav-link"><i class="fa fa-store"></i><p class="px-1">Products</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="" class="nav-link"><i class="fa fa-address-book"></i><p class="px-1">Customers</p></a>
          </li>
          <li class="nav-item has-treeview">
            <a href="" class="nav-link">
              <i class="fas fa-bars"></i>
              <p class="px-1">Sales <i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Manage Sales</p>
                </a>
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sell</p>
                </a>
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales report</p>
                </a>
              </li>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>