import Vue from 'vue'
import Vuex from 'vuex'
import social from "./modules/socail.module";
import phone from "./modules/phone.module";
import addresses from "./modules/addresses.module";
import collections from "./modules/collections.module";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    social,
    phone,
    addresses,
    collections
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},

})