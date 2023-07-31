import Vue from 'vue'
import Vuex from 'vuex'


export default {
    namespaced: true,
    state: {
        token: '',
        isAuthenticated: false
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.tokem = localStorage.getItem('token')
                state.isAuthenticated = true
            } else {
                state.token = '',
                    state.isAuthenticated = false
            }
        },
        setToken(state, token) {
            state.token = token,
                state.isAuthenticated = true
        },
        removeToken(state) {
            state.token = '',
                isAuthenticated = false
        }
    },
    getters: {
        loggedIn(state) {
            return state.token != null
        }
    },
    actions: {}
}