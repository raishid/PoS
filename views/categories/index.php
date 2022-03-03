<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Manage Categories</h1>
          <button type="button" id="modal-category-button" class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#create-modal-category">
              Create Category
          </button>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><i class="fa-solid fa-gauge mx-1"></i><a href="<?= url('index') ?>">Home</a></li>
            <li class="breadcrumb-item active">Category</li>
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
          <cate-table categories='<?=json_encode($data['categories'])?>' csrf_token='<?=csrf_token()?>' ></cate-table>
          <!-- /. Card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</div>