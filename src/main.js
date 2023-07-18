import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import './assets/css/all.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'; // Choose the desired theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')