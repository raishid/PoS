import { createApp } from 'vue'
import Test from './components/test.vue';

const app = createApp({});
app.component('test', Test);
app.mount('#app')