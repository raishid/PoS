import Vue from "vue/dist/vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false;

window.axios = require('axios');
window.Vue = require("vue/dist/vue");
window.moment = require('moment');

Vue.use(VueSweetalert2);

//login components
Vue.component('login-form', require('./components/login/Login.vue').default);

//users components
Vue.component('u-table', require('./components/users/TableUsers.vue').default);
Vue.component('u-modal', require('./components/users/ModalUser.vue').default);
//categories components
Vue.component('cate-table', require('./components/categories/TableCategories.vue').default);
Vue.component('cate-modal', require('./components/categories/ModalCategories.vue').default);
//products components
Vue.component('prod-table', require('./components/products/TableProducts.vue').default);
Vue.component('prod-modal', require('./components/products/ModalProducts.vue').default);
//customers components
Vue.component('customer-table', require('./components/customers/TableCustomers.vue').default);
Vue.component('customer-modal', require('./components/customers/ModalCustomers.vue').default);

const app = new Vue({
    el: '#app'
})
