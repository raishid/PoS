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
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-lock"></i
                  ></span>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
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
                <small class="text-muted">max weight 200mb </small>
                <div class="mt-2">
                  <img :src="pic" class="img-thumbnail" width="100" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
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
    prop_name_user: {
      default: "",
    },
    prop_username: {
      default: "",
    },
    prop_password: {
      default: "",
    },
    prop_role: {
      default: "",
    },
    prop_pic: {
      default: "/assets/images/anonymous.png",
    },
  },
  data() {
    return {
      name_user: this.prop_name_user,
      username: this.prop_username,
      password: this.prop_password,
      role: this.prop_role,
      pic: this.prop_pic,
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files[0]);
      return (this.pic = files[0]);
    },
    handleSubmitUser(){
        console.log('creando usuario.');
    }
  },
};
</script>