<template>
  <aside class="basket__container" @click.stop="">
    <div class="blackout" @click="toggleBasket()"></div>

    <div class="basket__pos">
      <div class="basket__wrapper">
        <div class="aside__title">
          <div class="basket__title">{{ $t("cart") }}</div>
          <a class="basket__clear" href="">{{ $t("clearCart") }}</a>
        </div>

        <div
          class="basket__item"
          v-for="(item, index) in getCartDataFromCookie()"
          :key="item.id"
        >
          <div class="basket__img">
            <img :src="item.photo" alt="" />
          </div>
          <div class="basket__body">
            <div class="basket-item__name">{{ item.collection }}</div>
            <div class="basket-item__price">
              {{ itemTotalPrice(item) }}
            </div>
          </div>

          <div class="basket__quantity">
            <div class="basket__minus" @click="decrementCartItem(index)">-</div>
            <div>{{ item.quantity }}</div>
            <div class="basket__plus" @click="incrementCartItem(index)">+</div>
          </div>

          <div class="basket-item__delete" @click="deleteCartItem(index)">
            <img :src="deleteImg" alt="" />
          </div>
        </div>

        <div class="aside__btn-container">
          <a class="aside__close" @click="toggleBasket">
            {{ $t("continueShopping") }}
          </a>
          <router-link
            @click.native="toggleBasket"
            to="/verify-order"
            class="aside_buy"
            >{{ $t("checkout") }}</router-link
          >
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data: () => ({
    deleteImg: require("@/assets/img/basket/basket-item__delete.svg"),
    basketSecondImg: require("@/assets/img/basket/basket-img-2.png"),
    basketFirstImg: require("@/assets/img/basket/basket_BIG_img.png"),
    cartData: [],
  }),
  computed: {
    cartTotalPrice() {
      return this.cartData
        .reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    toggleBasket() {
      this.$emit("toggle-basket");
    },
    itemTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // Assuming price is in float or decimal format
    },
    logMethod() {
      console.log(this.getCartDataFromCookie.photo);
    },
    deleteCartItem(index) {
      if (index >= 0 && index < this.cartData.length) {
        this.cartData.splice(index, 1); // Remove the item from the cartData array
        this.updateCartInCookie(this.cartData); // Save the updated cart back to the cookie
      }
    },
    updateCartItemQuantity(index, newQuantity) {
      const cart = this.getCartDataFromCookie();
      if (index >= 0 && index < cart.length) {
        cart[index].quantity = newQuantity; // Update the quantity for the specific item
        this.updateCartInCookie(cart); // Save the updated cart back to the cookie
      }
    },
    decrementCartItem(index) {
      const newQuantity = this.cartData[index].quantity - 1;
      if (newQuantity >= 1) {
        this.updateCartItemQuantity(index, newQuantity);
      }
    },

    incrementCartItem(index) {
      const newQuantity = this.cartData[index].quantity + 1;
      this.updateCartItemQuantity(index, newQuantity);
    },

    // Method to save the updated cart data to the cookie
    updateCartInCookie(cart) {
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
    },
    getCartDataFromCookie() {
      const existingCartData = Cookies.get("cart");
      this.cartData = existingCartData ? JSON.parse(existingCartData) : [];
      return this.cartData;
    },
  },
};
</script>

<style>
</style>