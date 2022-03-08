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
            <th class="text-center desktop">Name</th>
            <th class="text-center">User</th>
            <th class="text-center">Pic</th>
            <th class="text-center">Role</th>
            <th class="text-center all">Status</th>
            <th class="text-center">Last Login</th>
            <th class="text-center">Registered</th>
            <th class="text-center all">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userParser" :key="index">
            <td class="text-center align-middle">{{ index + 1}}</td>
            <td class="text-center align-middle">{{ user.name }}</td>
            <td class="text-center align-middle">{{ user.username }}</td>
            <td class="text-center align-middle"><img :src="userPic(user.pic)" class="img-thumbnail rounded" width="50" /></td>
            <td class="text-center align-middle">{{ defineRole(user.role) }}</td>
            <td class="text-center align-middle"><button :class="StateClass(user.state)" type="button" @click="UpdateState(user.id, user.state)" title="Activate or deactivate user">{{ defineState(user.state) }}</button></td>
            <td class="text-center align-middle">{{ user.last_login }}</td>
            <td class="text-center align-middle">{{ formatDate(user.date, true) }}</td>
            <td class="text-center align-middle">
                <div>
                    <button class="btn btn-warning edit" @click="editU(user.id)"><i class="fa fa-pencil"></i></button>
                    
                    <button class="btn btn-danger delete" @click="deleteU(user.id)"><i class="fa fa-times"></i></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <u-modal :csrf_token="csrf_token" 
    @mutateUser="mutateData"
    ref="modal"
    @editData="editData">
    </u-modal>
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
            editB: false,
        }
    },
    methods:{
        defineRole(role){
            switch (parseInt(role)) {
                case 1:
                    return 'Admin';
                case 2:
                    return 'Assistant'
                case 3:
                    return 'Seller';
            }
        },
        defineState(state){
            switch (parseInt(state)) {
                case 1:
                    return 'Active';
                case 0:
                    return 'Disabled';
            }
        },
        StateClass(state){
          if(parseInt(state) == "1"){
            return "btn btn-success btn-sm"
          }else if(parseInt(state) == "0"){
            return "btn btn-danger btn-sm"
          }
        },
        UpdateState(id, state){
          let newState = state == "1" ? "0" : "1";
          axios({
            method:'post',
            url: `/users/state/update/${id}`,
            data: {
              csrf_token: this.csrf_token,
              new_state: newState
            }
          }).then(response => {
            const { data: { response:resp } } = response;
            const user = this.userParser.find(u => u.id === resp.id);
            user.state = resp.state;
            this.mutable = user.state;
          });
          return this.mutable;
        },
        formatDate(date, timestamp=false){
          let datetime;
          if(timestamp){
            datetime = new Date(date * 1000);
          }else{
            datetime = new Date(date);
          }
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
        editData(data){
          const user = this.userParser.find(u => u.id === data.id);
          user.name = data.name;
          user.username = data.username;
          user.role = data.role;
          user.pic = data.pic;
          user.date = data.date;
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
        },
        editU(id_u){
          const data = this.userParser.find(u => u.id === id_u);
          this.$refs.modal.editU(data);
          $('#modal-user-button').click();
        },
        deleteU(id_u){
          this.$swal.fire({
            title: 'Are you sure?',
            text: "do you want to delete this user?",
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
                url: `/users/delete/${id_u}`,
                data: {
                  csrf_token: this.csrf_token
                }
              }).then(response =>{
                  const { data: { status } } = response;
                  if(status){
                    this.$swal.fire(
                      'Deleted!',
                      'the user was deleted.',
                      'success'
                    )
                    //remove user in dom
                    this.userParser.splice(this.userParser.findIndex(u => u.id === id_u), 1);
                  }
              });
            }
          })
        }
    },
    mounted(){
      this.mountedDatatable();
    }
    
};
</script>