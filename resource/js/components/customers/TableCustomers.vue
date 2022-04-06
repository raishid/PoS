<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List customers</h3>
    </div>
    <div class="card-body">
      <table class="table table-striped" id="datatable-customers">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Name</th>
            <th class="text-center desktop">DNI</th>
            <th class="text-center desktop">Email</th>
            <th class="text-center desktop">Phone</th>
            <th class="text-center desktop">Address</th>
            <th class="text-center">Credit</th>
            <th class="text-center">Bill</th>
            <th class="text-center">Purchases</th>
            <th class="text-center">Last Purchase</th>
            <th class="text-center">Date</th>
            <th class="text-center all">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customerParser" :key="index">
            <td class="text-center align-middle">{{ index + 1}}</td>
            <td class="text-center align-middle">{{ customer.name}}</td>
            <td class="text-center align-middle">{{ customer.dni }}</td>
            <td class="text-center align-middle">{{ customer.email }}</td>
            <td class="text-center align-middle">{{ customer.phone }}</td>
            <td class="text-center align-middle">{{ customer.address }}</td>
            <td class="text-center align-middle">{{ customer.credit }}</td>
            <td class="text-center align-middle">{{ customer.bill }}</td>
            <td class="text-center align-middle">{{ customer.purchases }}</td>
            <td class="text-center align-middle">{{ customer.last_purchase != null ? formatDate(this.last_purchase) : '' }}</td>
            <td class="text-center align-middle">{{ formatDate(customer.created_at) }}</td>
            <td class="text-center align-middle">
                <div>
                    <button class="btn btn-warning edit" @click="editCustomer(customer.id)"><i class="fa fa-pencil"></i></button>
                    
                    <button class="btn btn-danger delete" @click="deleteCustomer(customer.id)"><i class="fa fa-times"></i></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <customer-modal :csrf_token="csrf_token" 
    @mutateCustomer="mutateData"
    ref="modal"
    @editData="editData">
    </customer-modal>
  </div>
</template>
<script>
import CustomerModal from './ModalCustomers.vue';
import moment from 'moment';
export default {
    name: 'customer-table',
    props: {
        customers: {
            type: String,
            required: true
        },
        csrf_token: {
          type: String,
          required: true
        }
    },
    components:{
        CustomerModal
    },
    data(){
        return {
            u_search: '',
            customerParser: JSON.parse(this.customers),
            datatable: undefined,
            editB: false,
        }
    },
    methods:{
        mountedDatatable(){
          return this.datatable = $('#datatable-customers').DataTable({
                                          responsive: true,
                                          destroy: true,
                                          lengthChange: false, 
                                          autoWidth: false,
                                          rowReorder: {
                                              selector: 'td:nth-child(2)'
                                        }
                  
          });
        },
        mutateData(data){
          this.customerParser.push(data);
          new Promise(res =>{
            this.datatable.destroy();
            res(true);
          }).then( () =>{
              this.mountedDatatable();
          })
        },
        editData(data){
          const customer = this.customerParser.find(u => u.id === data.id);
          customer.name = data.name;
          customer.dni = data.dni;
          customer.email = data.email;
          customer.phone = data.phone;
          customer.address = data.address;
          customer.credit = data.credit;
        },
        editCustomer(id){
          const data = this.customerParser.find(u => u.id === id);
          this.$refs.modal.editCustomer(data);
          $('#modal-customer-button').click();
        },
        deleteCustomer(id){
          this.$swal.fire({
            title: 'Are you sure?',
            text: "do you want to delete this customer?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              //ajax request delete
              axios({
                method:'post',
                url: `/customers/delete/${id}`,
                data: {
                  csrf_token: this.csrf_token
                }
              }).then(response =>{
                  const { data: { status } } = response;
                  if(status){
                    this.$swal.fire(
                      'Deleted!',
                      'the customer was deleted.',
                      'success'
                    )
                    //remove user in dom
                    this.customerParser.splice(this.customerParser.findIndex(u => u.id === id), 1);
                  }
              }).catch(error => {
                const { response: { status } } = error;
                if(status == 401){
                  this.$swal.fire(
                    'Error!',
                    'you are not authorized to delete this customer.',
                    'error'
                  )
                }
              });
            }
          })
        },
        formatDate(timestamp){
          return moment(timestamp).format('l');
        }
    },
    mounted(){
      this.mountedDatatable();
    }
    
};
</script>