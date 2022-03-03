<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Manage Products</h1>
          <button type="button" id="modal-product-button" class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#create-modal-product">
              Create Product
          </button>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><i class="fa-solid fa-gauge mx-1"></i><a href="<?= url('index') ?>">Home</a></li>
            <li class="breadcrumb-item active">Product</li>
          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!--Card -->
          <prod-table products='<?=json_encode($data['products'])?>' csrf_token='<?=csrf_token()?>'></prod-table>
          <!-- /. Card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</div>