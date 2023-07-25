import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import NewsView from '../views/NewsView.vue';
import Auth from '../views/Auth.vue';
import AboutCompanyView from '../views/AboutCompanyView.vue';
import VerifyOrderView from '../views/VerifyOrderView.vue';
import UserPlace from '../views/UserPlace.vue';
import UserOrders from '@/components/UserOrders.vue';
import UserFavorites from '@/components/UserFavorites.vue';
import Logout from '@/components/Logout.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product/:id/:name',
    name: 'product',
    component: ProductView,
    props: true
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
  },
  {
    path: '/company',
    name: 'company',
    component: AboutCompanyView,
  },
  {
    path: '/verify-order',
    name: 'verify-order',
    component: VerifyOrderView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserPlace,
    children: [{
        path: 'orders',
        name: 'userOrders',
        component: UserOrders,
      },
      {
        path: 'favorites',
        name: 'userFavorites',
        component: UserFavorites,
      },
      {
        path: 'logout',
        name: 'logout',
        component: Logout,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Прокручиваем страницу в начало при каждом переходе
    return {
      x: 0,
      y: 0
    };
  },
});


export default router;