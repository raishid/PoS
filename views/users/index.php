<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Users</h1>
          <button type="button" class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#create-modal-user">
              Create User
          </button>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="<?= url('index') ?>">Home</a></li>
            <li class="breadcrumb-item active">Users</li>
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
          <u-table users='<?=json_encode($data['users'])?>'></u-table>
          <!-- /. Card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</div>
<u-modal></u-modal>

<script type="application/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    $('#datatable-user').DataTable({
      responsive: true,
      destroy: true,
      responsive: true, 
      lengthChange: false, 
      autoWidth: false,
      rowReorder: {
          selector: 'td:nth-child(2)'
      },
      columnDefs: [
        { 
          className: "text-center align-middle", targets: "_all" 
        },
      ],
      
    });
  });
</script>
