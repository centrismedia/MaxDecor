import Vue from 'vue'
import Vuex from 'vuex'
import social from "./modules/socail.module";
import phone from "./modules/phone.module";
import addresses from "./modules/addresses.module";
import collections from "./modules/collections.module";
import products from "./modules/products.module";
import inquiry from "./modules/inquiry.module";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    social,
    phone,
    addresses,
    collections,
    inquiry,
    products
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},

})