<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List sales</h3>
    </div>
    <div class="card-body">
      <div class="d-flex mb-2">
        <date-range-picker
        v-model="dateRange"
        :date-format="dateFormat"
        ></date-range-picker>
      </div>
      <table class="table table-striped" id="datatable-products">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Invoice</th>
            <th class="text-center">Customer</th>
            <th class="text-center">Seller</th>
            <th class="text-center">Method</th>
            <th class="text-center">Total</th>
            <th class="text-center">Date</th>
            <th class="text-center all">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sale, index) in salesParser" :key="index">
            <td class="text-center align-middle">{{ index + 1}}</td>
            <td class="text-center align-middle">{{ formatInvoce(sale.id_sale) }}</td>
            <td class="text-center align-middle">{{ sale.customer.name }}</td>
            <td class="text-center align-middle">{{ sale.seller.name }}</td>
            <td class="text-center align-middle">{{ sale.method }}</td>
            <td class="text-center align-middle">{{ sale.total }}</td>
            <td class="text-center align-middle">{{ formatDate(sale.created_at) }}</td>
            <td class="text-center align-middle">
                <div>
                    <a :href="`/sales/print/invoice/${sale.id}`" target="_blank" class="btn btn-info"><i class="fa fa-print"></i></a>
                    <a :href="`/sales/edit/${sale.id}`" class="btn btn-warning edit" v-if="authParse.id == 1"><i class="fa fa-pencil"></i></a>
                    <button class="btn btn-danger delete" @click="deleteSale(sale.id)"><i class="fa fa-times"></i></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import DateRangePicker from 'vue2-daterange-picker'
export default {
    name: 'sales-table',
    props: {
        sales: {
            type: String,
            required: true
        },
        csrf_token: {
          type: String,
          required: true
        },
        auth:{
          required: true
        }
    },
    components:{
      DateRangePicker
    },
    data(){
        return {
            u_search: '',
            salesParser: JSON.parse(this.sales),
            datatable: undefined,
            editB: false,
            dateRange: {
              startDate: '2022-01-01',
              endDate: '2022-03-09',
            }
        }
    },
    computed:{
      authParse(){
        return !this.auth ? false : JSON.parse(this.auth);
      }
    },
    methods:{
      dateFormat (classes, date) {
        return classes
      },
      dataProducts(page=2){
           axios({
             method:'get',
             url: `/api/products/all/page/${page}`,
             data: {
               csrf_token: this.csrf_token,
             }
           }).then(response => {
              const { data: { products } } = response;
              if(!response.data.status){
                this.getProduct = false;
                this.mutable_data = undefined;
              }
              if(this.getProduct){
                this.mutable_data = response.data; 
                products.map((value, index) => {
                  this.productsParser.push(value);
               });
              }
           }).then(() =>{
             if(this.getProduct){
               this.dataProducts(this.mutable_data.next_page);
             }
           })
        },
        mountedDatatable(){
          return this.datatable = $('#datatable-products').DataTable({
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
          this.productsParser.push(data);
          new Promise(res =>{
            this.datatable.destroy();
            res(true);
          }).then( () =>{
              this.mountedDatatable();
          })
        },
        prodPic(image){
          if(image){
            return image;
          }else{
            return '/assets/images/products/boxed-bg.jpg';
          }
        },
        editData(data){
          const product = this.productsParser.find(u => u.id === data.id);
          product.sku = data.sku;
          product.name = data.name;
          product.description = data.description;
          product.image = data.image;
          product.stock = data.stock;
          product.cost = data.cost;
          product.price = data.price;
        },
        deleteSale(id){
          this.$swal.fire({
            title: 'Are you sure?',
            text: "do you want to delete this sale?",
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
                url: `/sales/delete/${id}`,
                data: {
                  csrf_token: this.csrf_token
                }
              }).then(response =>{
                  const { data: { status } } = response;
                  if(status){
                    this.$swal.fire(
                      'Deleted!',
                      'the product was deleted.',
                      'success'
                    )
                    //remove user in dom
                    this.salesParser.splice(this.salesParser.findIndex(u => u.id === id), 1);
                  }
              });
            }
          })
        },
        formatDate(timestamp){
          return moment(timestamp).format('l, h:mm a');
        },
        formatInvoce(invoice){
          let new_invoice = invoice.toString().substr(0, 2) + '-';
          return new_invoice = new_invoice + invoice.toString().substr(2, 4);
        },
    },
    mounted(){
      this.mountedDatatable();
    }
    
};
</script>