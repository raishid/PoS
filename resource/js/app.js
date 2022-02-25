import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

window.axios = require('axios');
window.Vue = require("vue");

Vue.use(VueSweetalert2);

/* Vue.component('login-form', require('./components/login/Login.vue').default);
Vue.component('u-table', require('./components/users/TableUsers.vue').default);
Vue.component('u-modal', require('./components/users/ModalUser.vue').default); */

const app = new Vue({
    el: '#app'
})
