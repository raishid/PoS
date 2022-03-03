<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List categories</h3>
    </div>
    <div class="card-body">
      <table class="table table-striped" id="datatable-categories">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Name</th>
            <th class="text-center desktop">Description</th>
            <th class="text-center all">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in categoryParser" :key="index">
            <td class="text-center align-middle">{{ index + 1}}</td>
            <td class="text-center align-middle">{{ category.name}}</td>
            <td class="text-center align-middle">{{ category.description }}</td>
            <td class="text-center align-middle">
                <div>
                    <button class="btn btn-warning edit" @click="editCate(category.id)"><i class="fa fa-pencil"></i></button>
                    
                    <button class="btn btn-danger delete" @click="deleteCate(category.id)"><i class="fa fa-times"></i></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <cate-modal :csrf_token="csrf_token" 
    @mutateCate="mutateData"
    ref="modal"
    @editData="editData">
    </cate-modal>
  </div>
</template>
<script>
import ModalCategory from './ModalCategories.vue';
export default {
    name: 'cate-table',
    props: {
        categories: {
            type: String,
            required: true
        },
        csrf_token: {
          type: String,
          required: true
        }
    },
    components:{
        ModalCategory
    },
    data(){
        return {
            u_search: '',
            categoryParser: JSON.parse(this.categories),
            datatable: undefined,
            editB: false,
        }
    },
    methods:{
        mountedDatatable(){
          return this.datatable = $('#datatable-categories').DataTable({
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
          this.categoryParser.push(data);
          new Promise(res =>{
            this.datatable.destroy();
            res(true);
          }).then( () =>{
              this.mountedDatatable();
          })
        },
        editData(data){
          const category = this.categoryParser.find(u => u.id === data.id);
          category.name = data.name;
          category.description = data.description;
        },
        editCate(id){
          const data = this.categoryParser.find(u => u.id === id);
          this.$refs.modal.editCate(data);
          $('#modal-category-button').click();
        },
        deleteCate(id){
          this.$swal.fire({
            title: 'Are you sure?',
            text: "do you want to delete this category?",
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
                url: `/categories/delete/${id}`,
                data: {
                  csrf_token: this.csrf_token
                }
              }).then(response =>{
                  const { data: { status } } = response;
                  if(status){
                    this.$swal.fire(
                      'Deleted!',
                      'the category was deleted.',
                      'success'
                    )
                    //remove user in dom
                    this.categoryParser.splice(this.categoryParser.findIndex(u => u.id === id), 1);
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