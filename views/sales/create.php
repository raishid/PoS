<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Create Sales</h1>
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
        <div class="col-sm-12 col-lg-5 ">
            <card-create-sale auth='<?=json_encode(auth())?>' customers='<?=$data['customers']?>' id_sale='<?=$data['id_sale']?>' csrf_token='<?=csrf_token()?>'></card-create-sale>
        </div>
        <div class="d-none col-lg-7 d-lg-block">
            <table-add-product products='<?=json_encode($data['products'])?>'></table-add-product>
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</div>