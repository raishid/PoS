<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Manage Sales</h1>
          <a href="<?=url('sales.create')?>" class="btn btn-success mt-2">Create Sale</a>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><i class="fa-solid fa-gauge mx-1"></i><a href="<?= url('index') ?>">Home</a></li>
            <li class="breadcrumb-item active">Sale</li>
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
          <sales-table sales='<?=json_encode($data['sales'])?>' csrf_token='<?=csrf_token()?>' auth='<?=json_encode(auth())?>'></sales-table>
          <!-- /. Card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</div>