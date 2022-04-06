<template>
  <div
    class="modal fade"
    id="create-modal-customer"
    tabindex="-1"
    aria-labelledby="CustomerCreateModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form role="form" v-on:submit.prevent="handleSubmitCustomer" method="POST" autocomplete="off" enctype="multipart/form-data">
          <div class="modal-header">
            <h5 class="modal-title" id="CustomerCreateModal">Add New Customer</h5>
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
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Name Client"
                    v-model="name"
                    required
                    autocomplete="off"
                  />
                </div>

              </div>

              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-key"></i
                  ></span>
                  <input
                    type="number"
                    name="dni"
                    id="dni"
                    class="form-control"
                    placeholder="DNI"
                    v-model="dni"
                    required
                    min="1"
                  />
                </div>

              </div>

              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-envelope"></i
                  ></span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Email Client"
                    v-model="email"
                    autocomplete="off"
                  />
                </div>

              </div>

              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-phone"></i
                  ></span>
                  <imask-input 
                    v-model="phone" 
                    class="form-control" 
                    placeholder="Phone Client"
                    mask="+(00)000-000-00-00" 
                    autocomplete="off"
                  />
                </div>

              </div>

              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-address-book"></i
                  ></span>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="form-control"
                    placeholder="Short address"
                    v-model="address"
                    required
                    autocomplete="off"
                  />
                </div>

              </div>

              <div class="form-group">
                
                <div class="input-group input-group-lg">
                  <span class="input-group-text"
                    ><i class="fa fa-wallet"></i
                  ></span>
                  <imask-input 
                    v-model="credit" 
                    class="form-control" 
                    placeholder="Credit Limit" 
                    :mask="Number"
                  />
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
            <button type="submit" class="btn btn-primary">Save customer</button>
          </div>

        </form>
        
      </div>

    </div>

  </div>
</template>
<script>
import { IMaskComponent } from 'vue-imask';
export default {
  name: "customer-modal",
  props: {
    csrf_token: {
      required: true,
    },
  },
  data() {
    return {
      id_customer: undefined,
      name: undefined,
      dni: undefined,
      email: undefined,
      phone: undefined,
      address: undefined,
      credit: undefined,
      edit: false,
    };
  },
  components:{
    'imask-input': IMaskComponent
  },
  methods: {
    handleSubmitCustomer() {
      const form_data = new FormData();
      form_data.append("csrf_token", this.csrf_token);
      form_data.append('name', this.name);
      form_data.append('dni', this.dni);
      form_data.append('email', (this.email) ? this.email : '');
      form_data.append('phone', (this.phone) ? this.phone : '');
      form_data.append('address', this.address);
      form_data.append('credit', (this.credit) ? this.credit : '');

      if(this.edit){
          axios({
            method:'post',
            url: `/customers/edit/${this.id_customer}`,
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
          }).catch(error => {
            const { response: { status } } = error;
            if(status == 401){
              this.$swal.fire(
                'Error!',
                'You are not authorized to do this action.',
                'error'
              )
            }
          });
        }else{
          axios({
            method:'post',
            url: '/customers/create',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: form_data
          }).then(response =>{
            const { data: { status, response:resp } } = response;
            if(status){
              this.$refs.closeModal.click();
              this.$emit('mutateCustomer', resp);
              this.reset();
            }else{
              this.$swal.fire({
                icon: 'error',
                title: 'Error.',
                text: resp,
              });
            }
          }).catch(error => {
            const { response: { status } } = error;
            if(status == 401){
              this.$swal.fire(
                'Error!',
                'You are not authorized to perform this action.',
                'error'
              )
            }
          });
        }
    },
    reset() {
      this.id_customer = undefined;
      this.name = undefined;
      this.dni = undefined;
      this.email = undefined;
      this.phone = undefined;
      this.address = undefined;
      this.credit = undefined;
      this.edit = false;
    },
    editCustomer(data_edit) {
      this.edit = true;
      this.id_customer = data_edit.id;
      this.name = data_edit.name;
      this.dni = data_edit.dni;
      this.email = data_edit.email;
      this.phone = data_edit.phone;
      this.address = data_edit.address;
      this.credit = data_edit.credit.toString();
    },
  },
};
</script>