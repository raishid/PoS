<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">List users</h3>

      <div class="card-tools">
        <div class="input-group input-group-sm" style="width: 150px">
          <input
            type="text"
            name="table_search"
            class="form-control float-right"
            placeholder="Search"
            v-model="u_search"
          />

          <div class="input-group-append">
            <button type="submit" class="btn btn-default" @click="handleUsers">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body table-responsive p-0">
      <table class="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userParser" :key="user.id">
            <td>{{ index + 1}}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ defineRole(user.role) }}</td>
            <td>{{ defineState(user.state) }}</td>
            <td>{{ formatDate(user.date) }}</td>
            <td>
                <div>
                    <button class="btn btn-info">Editar</button>
                    <button class="btn btn-warning">Desactivar</button>
                    <button class="btn btn-danger">Eliminar</button>
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
        handleUsers(){
            console.log('buscando usuarios');
        },
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
        }
    }
};
</script>