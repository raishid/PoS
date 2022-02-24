<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List users</h3>
    </div>
    <div class="card-body">
      <table class="table table-striped" id="datatable-user">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User</th>
            <th>Pic</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Registered</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userParser" :key="user.id">
            <td>{{ index + 1}}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td><img :src="userPic(user.pic)" class="img-thumbnail rounded" width="50" /></td>
            <td>{{ defineRole(user.role) }}</td>
            <td><a class="btn btn-success btn-xs">{{ defineState(user.state) }}</a></td>
            <td>{{ user.last_login }}</td>
            <td>{{ formatDate(user.date) }}</td>
            <td>
                <div>
                    <a :href="`/edit/${user.id}`" class="btn btn-warning"><i class="fa fa-pencil"></i></a>
                    
                    <a :href="`/delete/${user.id}`" class="btn btn-danger"><i class="fa fa-times"></i></a>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>
<script>
export default {
    name: 'u-table',
    props: {
        users: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            u_search: '',
            userParser: JSON.parse(this.users),
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
    },
    
};
</script>