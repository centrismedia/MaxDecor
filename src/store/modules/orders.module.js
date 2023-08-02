import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        orders: {},


    }),
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        }
    },
    actions: {
        async getOrders({
            commit,
            state
        }) {
            state.isLoading = true;
            try {
                const res = await axios.get("/orders/list/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });
                if (res.status === 200) {
                    commit("setOrders", res.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        orders(state) {
            return state.oreders;
        },
    },
};