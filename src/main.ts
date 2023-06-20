import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/store';
import router from './router/index';
import vue3notification from '@kyvg/vue3-notification';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vue3notification);
app.mount('#app');