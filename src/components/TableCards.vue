<template>
  <div class="card-table">
    <section class="table-card__container container">
      <div class="card__container" v-for="card in products" :key="card.id">
        <div
          class="card__figure"
          @mouseover="card.isActive = true"
          @mouseout="card.isActive = false"
        >
          <a class="" @click="getProductDetails(card.id)">
            <img class="card__img" :src="card.photo" alt="" />

            <div class="card__figure-elem">
              <div class="card__figure-title">{{ card.status }}</div>
              <div
                class="card__figure-btn"
                :class="{ 'active__card-figure-btn': card.isActive }"
                @click.stop="addToCart(card)"
              >
                {{ $t("addBasket") }}
              </div>
            </div>
          </a>
          <div
            class="card__figure-btn-fav-icon"
            @click="toggleFavoriteIcon(index)"
            :class="{ 'active__card-figure-btn-fav-icon': card.favActive }"
          >
            <img :src="productionIcon" alt="" />
          </div>
        </div>
        <div class="card__body">
          <div class="card__body-subtitle">{{ $t("collection") }}</div>
          <div class="card__body-title">{{ card.get_collection }}</div>
          <div class="card__body-price">{{ prettifySum(card.price) }}</div>
        </div>
      </div>

      <div class="table-card__pagination">
        <div class="pagination_prew_btn">
          <img :src="paginationArrow" alt="" />
        </div>
        <div class="pagination_numb">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>13</p>
        </div>
        <div class="pagination_next_btn">
          <img :src="paginationArrow" alt="" />
        </div>
      </div>
    </section>
    <div class="card-table__open" @click="logMethod">
      {{ $t("allCollection") }}
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import { prettifySum } from "@/use/prettify";
export default {
  data: () => ({
    productionIcon: require("@/assets/img/cards/card-product-icon.svg"),
    paginationArrow: require("@/assets/img/cards/pagination_arrow.svg"),
    prettifySum,
     addedToCartIds: [],
  }),
  computed: {
    ...mapGetters("products", ["products", "infoProduct", "filteredProducts"]),
    ...mapGetters("collections", ["collections"]),
    ...mapGetters("cart", ["cart"]),
    totalPages() {
      // Calculate the total number of pages based on the number of cards per page
      const cardsPerPage = 8; // Change this value according to your needs
      return Math.ceil(this.cards.length / cardsPerPage);
    },
  },

  methods: {
    ...mapActions("products", ["getProducts", "getInfoProduct", "applyFilter"]),
    ...mapActions("collections", ["getCollections"]),
    ...mapActions("cart", ["getCart", "addCart", "deleteCart"]),
    logMethod() {
      console.log(this.products);
    },

    async getProductDetails(productId) {
      console.log("Product ID:", productId);
      if (!productId) {
        console.error("Invalid product ID");
        return;
      }

      await this.$store.dispatch("products/getInfoProduct", productId);
      this.$router.push({ name: "product", params: { id: productId } });
    },

    toggleFavoriteIcon(index) {
      const card = this.cards[index];
      card.favActive = !card.favActive;

      if (card.favActive) {
        this.$emit("toggle-favorite-icon", index);
        this.$nextTick(() => {
          const navSelect = document.querySelector(".nav__select");
          if (navSelect) {
            navSelect.classList.add("nav__select-click");
            setTimeout(() => {
              navSelect.classList.remove("nav__select-click");
            }, 1500);
          }
        });
      }
    },
    toggleCardFigure(index, show) {
      this.$set(this.isActiveCardFigureBtn, index, show);
    },
    toggleCardTableOpen() {
      this.isCardTableOpen = !this.isCardTableOpen;
      const tableCardContainer = document.querySelector(
        ".table-card__container"
      );
      if (tableCardContainer) {
        tableCardContainer.style.maxHeight = this.isCardTableOpen
          ? tableCardContainer.scrollHeight + "px"
          : "";
      }
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

    stopPr(e) {
      e.stopPropagation();
    },
  },
  async mounted() {
    // Check if the device is mobile (width <= 767px)
    const isMobileDevice = window.matchMedia("(max-width: 767px)").matches;

    // Fetch the products or check if it's available before using it
    try {
      await this.getProducts(); // Assuming getProducts is an asynchronous action
      this.products.forEach((card) => {
        card.isActive = isMobileDevice;
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
};
</script>

<style>
</style>