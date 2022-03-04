<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List products</h3>
    </div>
    <div class="card-body">
      <table class="table table-striped" id="datatable-products">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">SKU</th>
            <th class="text-center">Name</th>
            <th class="text-center">Description</th>
            <th class="text-center">Image</th>
            <th class="text-center">Category</th>
            <th class="text-center">Stock</th>
            <th class="text-center">Cost price</th>
            <th class="text-center">Sale price</th>
            <th class="text-center">Date</th>
            <th class="text-center all">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in productsParser" :key="index">
            <td class="text-center align-middle">{{ index + 1}}</td>
            <td class="text-center align-middle">{{ product.name}}</td>
            <td class="text-center align-middle">{{ product.description }}</td>
            <td class="text-center align-middle"><img :src="prodPic(product.image)" class="img-thumbnail rounded" width="50" /></td>
            <td class="text-center align-middle">{{ product.category }}</td>
            <td class="text-center align-middle">{{ product.stock }}</td>
            <td class="text-center align-middle">{{ product.cost }}</td>
            <td class="text-center align-middle">{{ product.price }}</td>
            <td class="text-center align-middle">{{ product.created_at }}</td>
            <td class="text-center align-middle">
                <div>
                    <button class="btn btn-warning edit" @click="editProd(product.id)"><i class="fa fa-pencil"></i></button>
                    
                    <button class="btn btn-danger delete" @click="deleteProd(product.id)"><i class="fa fa-times"></i></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <prod-modal :csrf_token="csrf_token" 
    @mutateProd="mutateData"
    ref="modal"
    @editData="editData"
    :categories="categoriesParser">
    </prod-modal>
  </div>
</template>
<script>
import ModalProduct from './ModalProducts.vue';
export default {
    name: 'cate-table',
    props: {
        products: {
            type: String,
            required: true
        },
        csrf_token: {
          type: String,
          required: true
        },
        categories: {
          type: String,
          required: true
        }
    },
    components:{
        ModalProduct
    },
    data(){
        return {
            u_search: '',
            productsParser: JSON.parse(this.products),
            datatable: undefined,
            editB: false,
            categoriesParser: JSON.parse(this.categories)
        }
    },
    methods:{
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
        editProd(id){
          const data = this.productsParser.find(u => u.id === id);
          this.$refs.modal.editProd(data);
          $('#modal-product-button').click();
        },
        deleteProd(id){
          this.$swal.fire({
            title: 'Are you sure?',
            text: "do you want to delete this product?",
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
                url: `/products/delete/${id}`,
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
                    this.productsParser.splice(this.productsParser.findIndex(u => u.id === id), 1);
                  }
              });
            }
          })
        },
    },
    mounted(){
      this.mountedDatatable();
    }
    
};
</script>