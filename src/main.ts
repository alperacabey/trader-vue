import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { Toast, options } from '@/plugins/vue-toastification';

const app = createApp(App).use(router);
app.use(Toast, options);
app.mount('#app');
