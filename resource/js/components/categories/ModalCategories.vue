<template>
  <div
    class="modal fade"
    id="create-modal-category"
    tabindex="-1"
    aria-labelledby="CategoryCreateModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form role="form" v-on:submit.prevent="handleSubmitCategory" autocomplete="off" method="POST" enctype="multipart/form-data">
          <div class="modal-header">
            <h5 class="modal-title" id="CategoryCreateModal">Add New Category</h5>
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
  name: "cate-modal",
  props: {
    csrf_token: {
      required: true,
    },
  },
  data() {
    return {
      id_category: undefined,
      name: undefined,
      description: undefined,
    };
  },
  methods: {
    handleSubmitCategory() {
      const form_data = new FormData();
      form_data.append("csrf_token", this.csrf_token);
      form_data.append('name', this.name);
      form_data.append('description', this.description);

      if(this.edit){
          axios({
            method:'post',
            url: `/categories/edit/${this.id_category}`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response => {
            const { data: { status, response:resp } } = response;
            if(status){
              this.$emit('editData', resp);
              this.$refs.closeModal.click();
              this.reset();
            }
          });
        }else{
          axios({
            method:'post',
            url: '/categories/create',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response =>{
            const { data: { status, response:resp } } = response;
            if(status){
              this.$refs.closeModal.click();
              this.$emit('mutateCate', resp);
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
      this.name = "";
      this.description = "";
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