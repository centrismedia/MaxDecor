import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        collections: {},


    }),
    mutations: {
        setCollections(state, collections) {
            state.collections = collections;
        }
    },
    actions: {
        async getCollections({
            commit,
            state
        }) {
            state.isLoading = true;
            try {
                const res = await axios.get("/store/collections/list");
                if (res.status === 200) {
                    commit("setCollections", res.data);
                    console.log(res.data);

                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        collections(state) {
            return state.collections;
        },
    },
};