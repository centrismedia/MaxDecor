import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        products: {},
        infoProduct: {},
        filteredProducts: [],
    }),
    mutations: {
        setProducts(state, products) {
            const productsWithIsActive = products.map(product => ({
                ...product,
                isActive: false,
            }));
            state.products = productsWithIsActive;
        },
        setInfoProduct(state, infoProduct) {
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
        },
        async applyFilter({
            commit,
            state
        }, filterOptions) {
            // Implement the filtering logic based on the selected filter options
            // and update the filteredProducts array in the state accordingly

            const filteredProducts = state.products.filter((product) => {
                // Implement the filtering logic based on the selected filter options
                // For example, you can check if product matches the filter options

                const matchesDestination = filterOptions.destination ?
                    filterOptions.destination.includes(product.destination) :
                    true;

                const matchesStyle = filterOptions.style ?
                    filterOptions.style.includes(product.style) :
                    true;

                // Add other filter conditions based on your data structure and filter options

                return matchesDestination && matchesStyle;
            });

            commit("setProducts", filteredProducts);

        }
    },
    getters: {
        products(state) {
            return state.products;
        },
        infoProduct(state) {
            return state.infoProduct;
        },
        filteredProducts: (state) => state.filteredProducts,
    },
};