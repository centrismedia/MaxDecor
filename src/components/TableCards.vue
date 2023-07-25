<template>
  <div class="card-table">
    <section class="table-card__container container">
      <div class="card__container" v-for="card in products" :key="card.id">
        <div
          class="card__figure"
          @mouseover="card.isActive = true"
          @mouseout="card.isActive = false"
        >
          <router-link
            class=""
            :to="{
              name: 'product',
              params: { name: card.title, id: card.id },
            }"
            @click="getProductDetails(card.id)"
          >
            <img class="card__img" :src="card.photo" alt="" />

            <div class="card__figure-elem">
              <div class="card__figure-title">{{ card.status }}</div>
              <div
                class="card__figure-btn"
                :class="{ 'active__card-figure-btn': card.isActive }"
              >
                ДОБАВИТЬ В КОРЗИНУ
              </div>
            </div>
          </router-link>
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
          <div class="card__body-price">{{ card.price }}</div>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    productionIcon: require("@/assets/img/cards/card-product-icon.svg"),
    paginationArrow: require("@/assets/img/cards/pagination_arrow.svg"),
  }),
  computed: {
    ...mapGetters("products", ["products", "infoProduct"]),
    ...mapGetters("collections", ["collections"]),
    totalPages() {
      // Calculate the total number of pages based on the number of cards per page
      const cardsPerPage = 8; // Change this value according to your needs
      return Math.ceil(this.cards.length / cardsPerPage);
    },
  },

  methods: {
    ...mapActions("products", ["getProducts", "getInfoProduct"]),
    ...mapActions("collections", ["getCollections"]),
    logMethod() {
      console.log(this.products);
    },
    async getProductDetails(productId) {
      // Make sure the "productId" parameter is valid
      console.log("Product ID:", this.productId);

      if (!productId) {
        console.error("Invalid product ID");
        return;
      }

      await this.getInfoProduct(productId);
      // Navigate to the "product" route passing the product details as route params
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

    stopPr(e) {
      e.stopPropagation();
    },
  },
  async mounted() {
    this.getProducts();
    this.getInfoProduct();
  },
};
</script>

<style>
</style>