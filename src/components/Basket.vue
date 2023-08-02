`<template>
  <aside class="basket__container" @click.stop="">
    <div class="blackout" @click="toggleBasket()"></div>

    <div class="basket__pos">
      <div class="basket__wrapper">
        <div class="aside__title">
          <div class="basket__title">{{ $t("cart") }}</div>
          <a class="basket__clear" href="">{{ $t("clearCart") }}</a>
        </div>

        <div class="basket__item" v-for="(item, index) in cart" :key="item.id">
          <div class="basket__img">
            <img :src="item.photo" alt="" />
          </div>
          <div class="basket__body">
            <div class="basket-item__name">{{ item.title }}</div>
            <div class="basket-item__price">
              {{ prettifySum(item.cost) }}
            </div>
          </div>

          <div class="basket__quantity">
            <div class="basket__minus" @click="decrementCartItem(index)">-</div>
            <div>{{ item.quantity }}</div>
            <div class="basket__plus" @click="incrementCartItem(index)">+</div>
          </div>

          <div class="basket-item__delete" @click="deleteCartItem(item.id)">
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
import { mapActions, mapGetters } from "vuex";
import { prettifySum } from "@/use/prettify";
export default {
  data: () => ({
    prettifySum,
    deleteImg: require("@/assets/img/basket/basket-item__delete.svg"),
    basketSecondImg: require("@/assets/img/basket/basket-img-2.png"),
    basketFirstImg: require("@/assets/img/basket/basket_BIG_img.png"),
    cartData: [],
  }),
  computed: {
    ...mapGetters("cart", ["cart"]),
    cartTotalPrice() {
      return this.cartData
        .reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    ...mapActions("cart", ["getCart", "addCart", "deleteCart"]),
    toggleBasket() {
      this.$emit("toggle-basket");
    },
    async decrementCartItem(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--; // Decrease the quantity by 1
        this.addCart(index);
      }
      const cartItem = {
        id: this.cart[index].id,
        quantity: this.cart[index].quantity,
      };
      await this.addCart(cartItem);
    },

    async incrementCartItem(index) {
      this.cart[index].quantity++; // Increase the quantity by 1
      this.addCart(this.cart[index].quantity);
      const cartItem = {
        id: this.cart[index].id,
        quantity: this.cart[index].quantity,
      };
      console.log(cartItem);
      await this.addCart(cartItem);
      console.log("Successfully updated cart item quantity!");
    },
    itemTotalPrice(item) {
      return (item.cost * item.quantity).toFixed(2); // Assuming price is in float or decimal format
    },
    logMethod() {
      console.log(this.cart);
    },
    async addToCart(card) {
      axios.defaults.withCredentials = true;
      try {
        // Prepare the cart item data that you want to add
        const cartItem = {
          id: card.id,
          quantity: 1,
        };

        // Dispatch the addCart action with the cart item data
        await this.addCart(cartItem);

        // Optionally, you can show a success message or perform any other actions after adding to the cart.
        console.log("Successfully added to cart!");
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
    async deleteCartItem(index) {
      try {
        // Call the deleteCart action from your Vuex store, passing the index of the item to delete
        await this.deleteCart(index);

        console.log("Successfully removed item from cart!");
      } catch (error) {
        console.error("Error deleting item from cart:", error);
      }
    },
  },
  async mounted() {
    this.logMethod();
  },
};
</script>

<style>
</style>