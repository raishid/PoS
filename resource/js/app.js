import Vue from "vue/dist/vue.js";

window.axios = require('axios');

window.Vue = require("vue");

/* window.dt = require('datatables.net')(window, $); */

Vue.component('login-form', require('./components/login/Login.vue').default);
Vue.component('u-table', require('./components/users/TableUsers.vue').default);
Vue.component('u-modal', require('./components/users/ModalUser.vue').default);

const app = new Vue({
    el: '#app'
});
