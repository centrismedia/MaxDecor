<template>
  <div class="header">
    <div class="swiper mySwiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
          <img :src="slide.img" alt="" />
          <div class="container container-a_p">
            <div class="slide-card__container">
              <div class="slide-card__subtitle">{{ slide.subtitle }}</div>
              <div class="slide-card__title">{{ slide.title }}</div>
              <div class="slide-card__price">{{ slide.price }}</div>
              <a class="slide-card__button" href=""> {{ slide.about }} </a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  data: () => ({
    slides: [
      {
        img: require("@/assets/img/main/swiper_photo_1.png"),
        subtitle: "HIT",
        title: "Madonna",
        price: "999,000 сум",
        about: "Подробнее",
      },
      {
        img: require("@/assets/img/main//swiper_photo_2.png"),
        subtitle: "HIT",
        title: "Romb",
        price: "999,000 сум",
        about: "Подробнее",
      },
      {
        img: require("@/assets/img/main//swiper_photo_1.png"),
        subtitle: "HIT",
        title: "Romb",
        price: "999,000 сум",
        about: "Подробнее",
      },
    ],
  }),
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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