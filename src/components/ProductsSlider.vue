<template>
  <section class="ss container">
    <div class="first-navigation-next">
      <img :src="swiperArrow" alt="" />
    </div>
    <div class="swiper mySwiper" ref="swiper">
      <div class="swiper-wrapper">
        <div
          id="slide_1"
          class="swiper-slide"
          v-for="slide in slides"
          :key="slide.id"
          @click="changeHeroImg(slide)" 
        >
          <img :src="slide.img" alt=""  />
          <p>{{ slide.id }} <span>10501</span></p>
        </div>
      </div>
    </div>
    <div class="first-navigation-prev">
      <img :src="swiperArrow" alt="" />
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default {
  data: () => ({
    slides: [
      {
        img: require("@/assets/img/slider/10501-1.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-2.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-3.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-4.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-5.jpg"),
        name: "Bricly",
      },
    ],
    swiperArrow: require("@/assets/img/slider/product-swiper-arrow.svg"),
  }),
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      loop: false,
      slidesPerView: 4,
      spaceBetween: 54,
      breakpoints: {
        1100: {
          slidesPerView: 4,
        },
        200: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      navigation: {
        nextEl: ".first-navigation-next",
        prevEl: ".first-navigation-prev",
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
    changeHeroImg(slide) {
      this.$emit("update-hero-image", slide.img);
    },
  },
};
</script>

<style>
</style>