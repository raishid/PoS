<template>
  <div
    class="modal fade"
    id="create-modal-product"
    tabindex="-1"
    aria-labelledby="ProductCreateModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form role="form" v-on:submit.prevent="handleSubmitProduct" method="POST" enctype="multipart/form-data">
          <div class="modal-header">
            <h5 class="modal-title" id="ProductCreateModal">Add New Product</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="reset"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card-body">
              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-barcode"></i
                  ></span>
                  <input
                    type="text"
                    name="sku"
                    id="sku"
                    class="form-control"
                    placeholder="Sku product"
                    v-model="sku"
                    required
                  />
                </div>

              </div>

              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text">
                    <i class="fa fa-box-archive"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Name product"
                    v-model="name"
                    required
                  />
                </div>

              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text">
                    <i class="fa fa-align-center"></i>
                  </span>
                  <textarea
                    name="description"
                    id="description"
                    class="form-control"
                    placeholder="Add a Description"
                    v-model="description"
                  >
                  </textarea>
                </div>

              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-list-check"></i
                  ></span>
                  <select
                    name="category"
                    id="category"
                    class="form-select"
                    v-model="category"
                    required
                  >
                    <option disabled selected>Select category</option>
                    <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.name }}</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text">
                    <i class="fa fa-boxes-stacked"></i>
                  </span>
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    class="form-control"
                    placeholder="Stock"
                    v-model="stock"
                    required
                    step="1"
                    min="1"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text">
                      <i class="fa fa-coins"></i>
                    </span>
                    <input
                      type="number"
                      name="cost"
                      id="cost"
                      class="form-control"
                      placeholder="Cost price"
                      v-model="cost"
                      required
                      min="0.01"
                      step="0.01"
                      @change="priceAuto"
                    />
                  </div>
                </div>
                
                <div class="col-sm-6">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text">
                      <i class="fa fa-money-check-dollar"></i>
                    </span>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="form-control"
                      placeholder="Sale price"
                      v-model="price"
                      required
                      min="0.01"
                      step="0.01"
                    />
                  </div>
                  
                  <div class="row mt-4">

                    <div class="col-sm-6">
                      <div class="form-group icheck-primary">
                          <input type="checkbox" ref="percent" @click="usePercentChange" checked>
                        <label for="use-percent" class="fs-7" @click="usePercentChange">
                          Use percentage
                        </label>
                      </div>
                    </div>
                    
                    <div class="col-sm-6 p-md-0">
                      <div class="input-group input-group-lg">
                        <input type="number" class="form-control fs-7" min="0" v-model="earning" @change="priceAuto">
                        <span class="input-group-text"><i class="fa fa-percent fs-7"></i></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              <div class="form-group">
                <h6 class="card-title">Upload image</h6>
                <input
                  type="file"
                  class="form-control"
                  name="image"
                  v-on:change="onFileChange"
                  accept=".png, .jpg, .jpeg"
                />
                <small class="text-muted">max weight 2mb </small>
                <div class="mt-2">
                  <img :src="url_image" class="img-thumbnail" width="100" />
                </div>
              </div>

            </div>

          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="closeModal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Save category</button>
          </div>

        </form>
        
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: "prod-modal",
  props: {
    csrf_token: {
      required: true,
    },
    categories: {
      required: true
    },
  },
  data() {
    return {
      id_product: undefined,
      sku: undefined,
      name: undefined,
      description: undefined,
      image: "/assets/images/products/boxed-bg.jpg",
      url_image: "/assets/images/products/boxed-bg.jpg",
      category: undefined,
      stock: undefined,
      cost: undefined,
      price: undefined,
      earning: 40,
    };
  },
  methods: {
    usePercentChange(){
      if(this.$refs.percent.checked){
        this.$refs.percent.checked = false;
      }else{
        this.$refs.percent.checked = true;
      }
    },
    priceAuto(){
      this.price = (this.$refs.percent.checked) 
                  ?
              ((Number(this.cost) * Number(this.earning)) / 100) + Number(this.cost)
                  :
              Number(this.price);
    },
    handleSubmitProduct() {
      const form_data = new FormData();
      form_data.append("csrf_token", this.csrf_token);
      form_data.append("sku", this.sku);
      form_data.append('name', this.name);
      form_data.append('description', this.description);
      form_data.append('image', this.image);
      form_data.append('category', this.category);
      form_data.append('stock', this.stock);
      form_data.append('cost', this.cost);
      form_data.append('price', this.price);

      if(this.edit){
          axios({
            method:'post',
            url: `/products/edit/${this.id_product}`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response => {
            const { data: { status, response:[ product ] } } = response;
            if(status){
              this.$emit('editData', product);
              this.$refs.closeModal.click();
              this.reset();
            }
          });
        }else{
          axios({
            method:'post',
            url: '/products/create',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response =>{
            const { data: { status, response: [ product ] } } = response;
            if(status){
              this.$refs.closeModal.click();
              this.$emit('mutateProd', product);
              this.reset();
            }else{
              this.$swal.fire({
                icon: 'error',
                title: 'Error.',
                text: response.data.response,
              });
            }
          })
        }
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if(files[0].size > 2000000){
        this.$swal.fire({
          icon: 'warning',
          title: 'The image is very heavy, the limit is up to 2mb'
        })
        return;
      }
      this.image = files[0];
      return (this.url_image = URL.createObjectURL(files[0]));
    },
    reset() {
      this.id_product = undefined,
      this.sku = undefined,
      this.name = undefined,
      this.description = undefined,
      this.image = "/assets/images/products/boxed-bg.jpg",
      this.url_image = this.image,
      this.category = undefined,
      this.stock = undefined,
      this.cost = undefined,
      this.price = undefined,
      this.earning = 40;
      this.edit = false;
    },
    editProd(data_edit) {
      this.edit = true;
      this.id_product = data_edit.id;
      this.sku = data_edit.sku;
      this.name = data_edit.name;
      this.description = data_edit.description;
      this.image = data_edit.image;
      this.url_image = data_edit.image;
      this.category = data_edit.category.id;
      this.stock = data_edit.stock;
      this.cost = data_edit.cost;
      this.price = data_edit.price;
      this.earning = (this.price / this.cost) * 100;
    },
  },
};
</script>
<style>
  .fs-7{
    font-size: 0.8rem !important;
  }
</style>