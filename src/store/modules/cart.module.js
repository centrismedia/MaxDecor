import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [], // Here will be stored cart data
    },
    mutations: {
        addToCart(state, card) {
            // Mutation for adding a card to the cart
            const existingItemIndex = state.cart.findIndex(
                (item) => item.photo === card.photo
            );
            if (existingItemIndex !== -1) {
                state.cart[existingItemIndex].quantity++;
            } else {
                state.cart.push({
                    price: card.price,
                    photo: card.photo,
                    collection: card.get_collection,
                    quantity: 1,
                });
            }

        },
        removeFromCart(state, index) {
            // Mutation for removing a card from the cart by index
            if (index >= 0 && index < state.cart.length) {
                state.cart.splice(index, 1);
            }
        },
        updateCartFromCookie(state, cartData) {
            state.cart = cartData;
        },
    },
    actions: {
        // Your other actions if needed
        addToCart({
            commit
        }, card) { // Make sure the action name here matches the one used in the component
            // Action to add the card to the cart
            commit("addToCart", card); // Call the corresponding mutation
        },
        getCartFromCookieAction({
            commit
        }) {
            const existingCartData = Cookies.get("cart");
            const cartData = existingCartData ? JSON.parse(existingCartData) : [];
            commit("updateCartFromCookie", cartData);
        },
    },
});