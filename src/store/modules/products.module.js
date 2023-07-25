import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        products: {},
        infoProduct: {}

    }),
    mutations: {
        setProducts(state, products) {
            const productsWithIsActive = products.map(product => ({
                ...product,
                isActive: false,
            }));
            state.products = productsWithIsActive;
        },
        setInfoProduct(state, products) {
            state.infoProduct = infoProduct
        }
    },
    actions: {
        async getProducts({
            commit,
            state
        }) {
            state.isLoading = true;
            try {
                const res = await axios.get("/store/products/list", {
                    headers: {
                        'content-language': "ru"
                    }
                });
                if (res.status === 200) {
                    commit("setProducts", res.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getInfoProduct({
            commit,
            state
        }, productId) {
            state.isLoading = true;
            try {
                const res = await axios.get(`/store/products/retrieve/${productId}`, {
                    headers: {
                        'content-language': "ru",
                    },
                });
                if (res.status === 200) {
                    commit("setInfoProduct", res.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    getters: {
        products(state) {
            return state.products;
        },
        infoProduct(state) {
            return state.infoProduct;
        },
    },
};