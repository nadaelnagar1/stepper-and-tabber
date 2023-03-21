import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Steps from './components/Steps.vue';
import TabMenu from './components/TabMenu.vue';
import '../src/assets/styles.scss'

const app = createApp(App);

app.use(router);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);

app.mount('#app');
