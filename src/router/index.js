 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import HomeView from '../views/HomeView.vue'
 import ProductView from '../views/ProductView.vue'
 import NewsView from '../views/NewsView.vue'
 import Auth from '../views/Auth.vue'
 import AboutCompanyView from '../views/AboutCompanyView.vue'

 Vue.use(VueRouter)

 const routes = [{
     path: '/',
     name: 'home',
     component: HomeView
   },
   {
     path: '/product',
     name: 'product',
     component: ProductView
   },
   {
     path: '/news',
     name: 'news',
     component: NewsView
   },
   {
     path: '/auth',
     name: 'auth',
     component: Auth
   },
   {
     path: '/company',
     name: 'company',
     component: AboutCompanyView
   },
 ];

 const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,

 });

 export default router