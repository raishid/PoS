import Vue from "vue/dist/vue.js";

window.axios = require('axios');

window.Vue = require("vue");

Vue.component('login-form', require('./components/login/Login.vue').default);
Vue.component('u-table', require('./components/users/TableUsers.vue').default);

const app = new Vue({
    el: '#app'
});
