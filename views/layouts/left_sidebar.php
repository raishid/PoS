 <!-- Main Sidebar Container -->
 <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="/assets/images/logo1.png" alt="AdminLTE Logo" class="brand-image-xl w-100 mh-100 elevation-3" style="opacity: .8">
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
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
            <a href="<?=url('index')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'index' ? 'active' : ''?>"><i class="fa fa-home"></i><p class="px-1">Home</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="<?=url('users.index')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'users.index' ? 'active' : ''?>"><i class="fa fa-user"></i><p class="px-1">Users</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="<?=url('category.index')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'category.index' ? 'active' : ''?>"><i class="fa fa-th"></i><p class="px-1">Categories</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="<?=url('product.index')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'product.index' ? 'active' : ''?>"><i class="fa fa-store"></i><p class="px-1">Products</p></a>
          </li>
          <li class="nav-item menu-open">
            <a href="<?=url('customer.index')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'customer.index' ? 'active' : ''?>"><i class="fa fa-address-book"></i><p class="px-1">Customers</p></a>
          </li>
          
          <li class="nav-item has-treeview <?=preg_match("/sales./i", request()->getLoadedRoute()->getName()) ? 'menu-is-opening menu-open' : ''?>">
            <a href="" class="nav-link">
              <i class="fas fa-bars"></i>
              <p class="px-1">Sales <i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="<?=url('sales.index')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'sales.index' ? 'active' : ''?>">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Manage Sales</p>
                </a>
                <a href="<?=url('sales.create')?>" class="nav-link <?=request()->getLoadedRoute()->getName() == 'sales.create' ? 'active' : ''?>">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sell</p>
                </a>
                <a href="#" class="nav-link">
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