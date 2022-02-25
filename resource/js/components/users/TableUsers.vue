<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List users</h3>
    </div>
    <div class="card-body">
      <table class="table table-striped" id="datatable-user">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Name</th>
            <th class="text-center">User</th>
            <th class="text-center">Pic</th>
            <th class="text-center">Role</th>
            <th class="text-center">Status</th>
            <th class="text-center">Last Login</th>
            <th class="text-center">Registered</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userParser" :key="user.id">
            <td class="text-center align-middle">{{ index + 1}}</td>
            <td class="text-center align-middle">{{ user.name }}</td>
            <td class="text-center align-middle">{{ user.username }}</td>
            <td class="text-center align-middle"><img :src="userPic(user.pic)" class="img-thumbnail rounded" width="50" /></td>
            <td class="text-center align-middle">{{ defineRole(user.role) }}</td>
            <td class="text-center align-middle"><a class="btn btn-success btn-xs">{{ defineState(user.state) }}</a></td>
            <td class="text-center align-middle">{{ user.last_login }}</td>
            <td class="text-center align-middle">{{ formatDate(user.date) }}</td>
            <td class="text-center align-middle">
                <div>
                    <button class="btn btn-warning"><i class="fa fa-pencil"></i></button>
                    
                    <button class="btn btn-danger"><i class="fa fa-times"></i></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <u-modal :csrf_token="csrf_token" @mutateUser="mutateData"></u-modal>
  </div>
</template>
<script>
import ModalUser from './ModalUser.vue';
export default {
    name: 'u-table',
    props: {
        users: {
            type: String,
            required: true
        },
        csrf_token: {
          type: String,
          required: true
        }
    },
    components:{
      ModalUser
    },
    data(){
        return {
            u_search: '',
            userParser: JSON.parse(this.users),
            datatable: undefined,
        }
    },
    methods:{
        defineRole(role){
            switch (role) {
                case "1":
                    return 'Admin';
                case "2":
                    return 'Assistant'
                case "3":
                    return 'Seller';
            }
        },
        defineState(state){
            switch (state) {
                case "1":
                    return 'Active';
                case "0":
                    return 'No-Active';
            }
        },
        formatDate(date){
            const datetime = new Date(date);
            return datetime.toLocaleDateString('es-Mx');
        },
        userPic(pic){
          if(pic){
            return pic;
          }else{
            return '/assets/images/anonymous.png';
          }
        },
        mutateData(data){
          this.userParser.push(data);
          new Promise(res =>{
            this.datatable.destroy();
            res(true);
          }).then( () =>{
              this.mountedDatatable();
          })

        },
        mountedDatatable(){
          return this.datatable = $('#datatable-user').DataTable({
                                          responsive: true,
                                          destroy: true,
                                          lengthChange: false, 
                                          autoWidth: false,
                                          rowReorder: {
                                              selector: 'td:nth-child(2)'
                                        }
                  
          });
        }
    },
    mounted(){
      this.mountedDatatable();
    }
    
};
</script>