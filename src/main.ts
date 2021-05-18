import {createApp} from 'vue';
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'vue-router';
import kang from './components/kang.vue';


const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: kang}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

