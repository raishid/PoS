<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Home</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><i class="fa-solid fa-gauge mx-1"></i><a href="/">Home</a></li>
            <li class="breadcrumb-item active">Panel</li>
          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">

      <?php if(intval(auth()->role) == 1 || intval(auth()->role) == 2): ?>

      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-info">
            <div class="inner">
              <h3><?= $data['sales'] ?></h3>
              <p>New Sales</p>
            </div>
            <div class="icon">
              <i class="ion ion-social-usd"></i>
            </div>
            <a href="<?= url('sales.index') ?>" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-success">
            <div class="inner">
              <h3><?= $data['categories'] ?></h3>
              <p>Categories</p>
            </div>
            <div class="icon">
              <i class="ion ion-clipboard"></i>
            </div>
            <a href="<?= url('category.index') ?>" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-warning">
            <div class="inner">
              <h3><?= $data['customers'] ?></h3>
              <p>Customers</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <a href="<?= url('customer.index') ?>" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-danger">
            <div class="inner">
              <h3><?= $data['products'] ?></h3>
              <p>Products</p>
            </div>
            <div class="icon">
              <i class="ion ion-ios-cart"></i>
            </div>
            <a href="<?= url('product.index') ?>" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="card">
          <div class="card-body">
            <div class="col-sm-12">
              <report-home-sales csrf_token='<?= csrf_token() ?>'></report-home-sales>
            </div>

            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <report-home-most-sale-products csrf_token='<?= csrf_token() ?>'></report-home-most-sale-products>
                </div>
                <div class="col-sm-12 col-md-6">
                  <!-- PRODUCT LIST -->
                  <products-recently csrf_token='<?= csrf_token() ?>'></products-recently>
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php else: ?>
      <div class="alert alert-success" role="alert">
        Welcome to the dashboard. <span class="fw-bold"><?=ucfirst(auth()->name)?></span>
      </div>
    <?php endif; ?>
    </div>
  </section>
  <!-- /.content -->
</div>
<!-- /.content-wrapper -->