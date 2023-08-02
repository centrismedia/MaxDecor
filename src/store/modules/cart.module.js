import axios from "axios";
import Vue from "vue";
axios.defaults.withCredentials = true
export default {
    namespaced: true,
    state: () => ({
        cart: [],
        isLoading: false,
    }),
    mutations: {
        setCart(state, cart) {
            state.cart = cart;
        },
    },
    actions: {
        async getCart({
            commit,
            state
        }) {
            state.isLoading = true;
            try {
                const res = await axios.get("/cart/cart_items/list/");
                if (res.status === 200) {
                    commit("setCart", res.data);
                }
            } catch (error) {}
            state.isLoading = false;
        },
        async addCart({
            dispatch
        }, cart) {
            await axios("/cart/cart_items/create_update/", {
                method: "POST",
                data: cart,
            });
            dispatch("getCart");
        },
        async deleteCart({
            dispatch,
            state
        }, itemId) {
            try {
                await axios.delete(`/cart/cart_items/delete/${itemId}`);
                // Update the cart state using Vue.set() to trigger reactivity
                Vue.set(
                    state,
                    "cart",
                    state.cart.filter((item) => item.id !== itemId)
                );
                dispatch("getCart"); // Refresh the cart after deletion
            } catch (error) {
                console.error("Error deleting cart item:", error);
            }
        },
    },
    getters: {
        cart(state) {
            return state.cart;
        },
        isLoading(state) {
            return state.isLoading;
        },
    },
};