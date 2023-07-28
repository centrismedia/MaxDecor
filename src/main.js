import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./interceptors/axios";  
import './assets/scss/main.scss'
import './assets/css/all.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'; // Choose the desired theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import i18n from "./i18n";

export const eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,

  render: h => h(App),
}).$mount('#app')