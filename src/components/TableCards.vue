<template>
  <div class="card-table">
    <section class="table-card__container container">
      <router-link
        to="/product"
        class="card__container"
        v-for="card in cards"
        :key="card.id"
      >
        <div
          class="card__figure"
          @mouseover="card.isActive = true"
          @mouseout="card.isActive = false"
        >
          <img class="card__img" :src="card.img" alt="" />
          <div class="card__figure-elem">
            <div class="card__figure-title">{{ card.status }}</div>
            <div
              class="card__figure-btn"
              :class="{ 'active__card-figure-btn': card.isActive }"
            >
              ДОБАВИТЬ В КОРЗИНУ
            </div>
            <div
              class="card__figure-btn-fav-icon"
              @click="toggleFavoriteCard(index)"
              :class="{ 'active__card-figure-btn-fav-icon': card.isActive }"
            >
              <img :src="productionIcon" alt="" />
            </div>
          </div>
        </div>
        <div class="card__body">
          <div class="card__body-subtitle">{{ card.category }}</div>
          <div class="card__body-title">{{ card.name }}</div>
          <div class="card__body-price">{{ card.price }}</div>
        </div>
      </router-link>

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
    <div class="card-table__open" @click="toggleCardTableOpen">
      ВСЕ КОЛЛЕКЦИИ
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    productionIcon: require("@/assets/img/cards/card-product-icon.svg"),
    paginationArrow: require("@/assets/img/cards/pagination_arrow.svg"),
    cards: [
      {
        img: require("@/assets/img/cards/card/1.png"),
        status: "NEW",
        category: "Коллекция",
        name: "BRICLY ",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/2.png"),
        status: "NEW",
        category: "Коллекция",
        name: "KARAKUM",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/3.png"),
        status: "NEW",
        category: "Коллекция",
        name: "MAGIC",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/4.png"),
        status: "NEW",
        category: "Коллекция",
        name: "CARAT",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/5.png"),
        status: "NEW",
        category: "Коллекция",
        name: "PLANTS",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/6.png"),
        status: "NEW",
        category: "Коллекция",
        name: "FENIX",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/7.png"),
        status: "NEW",
        category: "Коллекция",
        name: "Madonna",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/8.png"),
        status: "NEW",
        category: "Коллекция",
        name: "ELEGANCE",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/9.png"),
        status: "NEW",
        category: "Коллекция",
        name: "BAMBUK",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/10.png"),
        status: "NEW",
        category: "Коллекция",
        name: "AFFRA",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/11.png"),
        status: "NEW",
        category: "Коллекция",
        name: "DIANA",
        price: "545,000 сум",
        isActive: false,
      },
      {
        img: require("@/assets/img/cards/card/12.png"),
        status: "NEW",
        category: "Коллекция",
        name: "ROMB",
        price: "545,000 сум",
        isActive: false,
      },
    ],

    isActiveCardFigureBtn: [],
  }),
  computed: {
    totalPages() {
      // Calculate the total number of pages based on the number of cards per page
      const cardsPerPage = 8; // Change this value according to your needs
      return Math.ceil(this.cards.length / cardsPerPage);
    },
  },

  methods: {
    toggleFavoriteCard(index) {
      this.cards[index].isActive = !this.cards[index].isActive;
    },
    toggleFavoriteIcon(index) {
      this.$emit("toggle-favorite-icon", index);
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
  },
};
</script>

<style>
</style>