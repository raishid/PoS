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
                    ><i class="fa fa-th"></i
                  ></span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Name Category"
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
  name: "u-modal",
  props: {
    csrf_token: {
      required: true,
    },
  },
  data() {
    return {
      id_product: undefined,
      sku: undefined,
      name: undefined,
      description: undefined,
      image: "/images/anonymous.png",
      url_image: "/assets/images/anonymous.png",
      stock: undefined,
      cost: undefined,
      price: price,
      date: undefined,

    };
  },
  methods: {
    handleSubmitProduct() {
      const form_data = new FormData();
      form_data.append("csrf_token", this.csrf_token);
      form_data.append("sku", this.sku);
      form_data.append('name', this.name);
      form_data.append('description', this.description);
      form_data.append('image', this.image);
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
            const { data: { status, response:resp } } = response;
            if(status){
              this.$emit('editData', JSON.parse(resp))
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
            const { data: { status, response:resp } } = response;
            if(status){
              this.$refs.closeModal.click();
              this.$emit('mutateProd', JSON.parse(resp));
              this.reset();
            }else{
              this.$swal.fire({
                icon: 'error',
                title: 'Error.',
                text: resp,
              });
            }
          })
        }
    },
    reset() {
      this.id_product = undefined,
      this.sku = undefined,
      this.name = undefined,
      this.description = undefined,
      this.image = "/images/anonymous.png",
      this.url_image = "/assets/images/anonymous.png",
      this.stock = undefined,
      this.cost = undefined,
      this.price = price,
      this.date = undefined,
      this.edit = false;
    },
    editCate(data_edit) {
      this.edit = true;
      this.id_category = data_edit.id;
      this.name = data_edit.name;
      this.description = data_edit.description;
    },
  },
};
</script>