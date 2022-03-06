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
            <div class="card border-0 border-top border-4 border-success">
                <div class="card-title"></div>
                <div class="card-body">
                    <form role="form" method="post" autocomplete="off">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text"><i class="fa fa-user"></i></span>
                                <input type="text" name="seller" class="form-control" readonly/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text"><i class="fa fa-key"></i></span>
                                <input type="text" name="sale" class="form-control" readonly/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text"><i class="fa fa-user"></i></span>
                                <select name="customer" class="form-select" required>
                                    <option value="" selected>Select Customer</option>
                                </select>
                                <span class="input-group-text">
                                    <button 
                                        type="button" 
                                        id="modal-customer-button" 
                                        class="btn btn-success btn-sm" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#create-modal-customer"
                                    >Add client
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-6">
                                <div class="input-group ">
                                    <button class="btn btn-danger btn-sm"><i class="fa fa-times"></i></button>
                                    <input type="text" name="product" class="form-control" placeholder="Add Product" required>
                                </div>
                            </div>
                            <div class="col-3">
                                <input type="number" name="quantity_product" class="form-control" min="1" placeholder="1" required>
                            </div>
                            <div class="col-3">
                                <div class="input-group">
                                    <input type="number" name="price" class="form-control" placeholder="10$" readonly required>
                                    <span class="input-group-text"><i class="fa fa-usd"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="d-grid">
                                    <button type="button" class="d-block btn btn-outline-success d-lg-none">Add Product</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="border-top mt-2 row justify-content-end">
                            <div class="col-sm-8">
                                <table class="table table-light">
                                    <thead>
                                        <tr>
                                            <th>Tax</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="w-50">
                                                <div class="input-group">
                                                    <input type="number" class="form-control" name="tax" min="1" autocomplete="off" placeholder="0" required>
                                                    <span class="input-group-text"><i class="fa fa-percent"></i></span>
                                                </div>
                                            </td>
                                            <td class="w-50">
                                                <div class="input-group">
                                                    <input type="number" class="form-control" name="total_sale" min="1" autocomplete="off" placeholder="0.00" readonly required>
                                                    <span class="input-group-text"><i class="fa fa-dollar-sign"></i></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-group">
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="d-none col-lg-7 d-lg-block">
            <div class="card border-0 border-top border-4 border-warning">

            </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</div>