<template>
  <div
    class="modal fade"
    id="create-modal-user"
    tabindex="-1"
    aria-labelledby="UserCreateModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form role="form" v-on:submit.prevent="handleSubmitUser" method="POST" enctype="multipart/form-data">
          <div class="modal-header">
            <h5 class="modal-title" id="UserCreateModal">Add New User</h5>
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
                    ><i class="fa fa-user"></i
                  ></span>
                  <input
                    type="text"
                    name="name_user"
                    id="name_user"
                    class="form-control"
                    placeholder="Name User"
                    v-model="name_user"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-key"></i
                  ></span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                    placeholder="Username"
                    v-model="username"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-lock"></i
                  ></span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-users"></i
                  ></span>
                  <select
                    name="role"
                    id="role"
                    class="form-select"
                    v-model="role"
                    required
                  >
                    <option value="">Select user role</option>
                    <option value="1">Administrator</option>
                    <option value="2">Assistant</option>
                    <option value="3">Seller</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <h6 class="card-title">Upload photo</h6>
                <input
                  type="file"
                  class="form-control"
                  name="pic"
                  v-on:change="onFileChange"
                  accept=".png, .jpg, .jpeg"
                />
                <small class="text-muted">max weight 20mb </small>
                <div class="mt-2">
                  <img :src="url_pic" class="img-thumbnail" width="100" />
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
            <button type="submit" class="btn btn-primary">Save user</button>
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
    csrf_token :{
      required: true
    },
    
  },
  data() {
    return {
      id_user: undefined,
      name_user: undefined,
      username: undefined,
      password: undefined,
      role: undefined,
      pic: "/assets/images/anonymous.png",
      url_pic: "/assets/images/anonymous.png",
      edit: false,
    };
  },
  methods: {
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
      this.pic = files[0];
      return (this.url_pic = URL.createObjectURL(files[0]));
    },
    handleSubmitUser(){
        const form_data = new FormData();
        form_data.append('csrf_token', this.csrf_token);
        form_data.append('name_user', this.name_user);
        form_data.append('username', this.username);
        form_data.append('password', this.password);
        form_data.append('role', this.role);
        form_data.append('pic', this.pic);

        if(this.edit){
          axios({
            method:'post',
            url: `/users/edit/${this.id_user}`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response => {
            const { data: { status, response:resp } } = response;
            if(status){
              this.$emit('editData', resp)
              this.$refs.closeModal.click();
              this.reset();
            }
          });
        }else{
          axios({
            method:'post',
            url: '/users/create',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response =>{
            const { data: { status, response:resp } } = response;
            if(status){
              this.$refs.closeModal.click();
              this.$emit('mutateUser', resp);
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
    reset(){
      this.name_user = '';
      this.username = '';
      this.password = '';
      this.role = '';
      this.pic = '';
      this.url_pic = this.pic;
      this.edit = false;
    },
    editU(data_edit){
      this.edit = true;
      this.id_user = data_edit.id;
      this.name_user = data_edit.name;
      this.username = data_edit.username;
      this.role = data_edit.role;
      this.pic = data_edit.pic;
      this.url_pic = data_edit.pic;
    }
  },
};
</script>