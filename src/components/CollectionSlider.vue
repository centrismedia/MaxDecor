<template>
  <section class="ss-2">
    <div class="container">
      <div class="recom__container">
        <p class="recom__titel">Похожии коллекции</p>
        <div class="swiper-button__container">
          <div class="second-slider-prev">
            <img :src="swiperArrow" alt="" />
          </div>
          <div class="second-slider-next">
            <img :src="swiperArrow" alt="" />
          </div>
        </div>
      </div>
      <div class="swiper mySwiper-2 container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in collections" :key="item.id">
            <a class="card__container" href="#">
              <div class="card__figure">
                <img class="card__img" :src="item.img" alt="" />
                <div class="card__figure-elem">
                  <div class="card__figure-title">{{ item.status }}</div>
                  <div class="card__figure-btn">ДОБАВИТЬ В КОРЗИНУ</div>
                  <div class="card__figure-btn-fav-icon">
                    <img :src="productionIcon" alt="" />
                  </div>
                </div>
              </div>
              <div class="card__body">
                <div class="card__body-subtitle">{{ item.category }}</div>
                <div class="card__body-title">{{ item.name }}</div>
                <div class="card__body-price">{{ item.price }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default {
  data: () => ({
    collections: [
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
    productionIcon: require("@/assets/img/cards/card-product-icon.svg"),
    swiperArrow: require("@/assets/img/slider/product-swiper-arrow.svg"),
  }),
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      loop: false,
      slidesPerView: 3,
      spaceBetween: 70,
      spaceBetween: 54,
      grabCursor: true,
      navigation: {
        nextEl: ".second-slider-next",
        prevEl: ".second-slider-prev",
      },
      /*    scrollbar: {
        el: ".swiper-scrollbar",
      }, */
    });
  },
  methods: {
    onWindowResize() {
      if (this.swiper) {
        this.swiper.destroy();
        this.initSwiper();
      }
    },
  },
};
</script>

<style>
</style>