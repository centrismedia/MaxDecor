<template>
  <section class="news-card__container container swiper" ref="swiper">
    <div class="news-card__section-title">Новости</div>

    <div class="news-card__container-pos swiper-wrapper">
      <div class="news_card swiper-slide" v-for="info in news" :key="info.id">
        <div class="news-card__img-container">
          <img class="news-card__img" :src="info.img" alt="" />
        </div>

        <div class="news-card__txt">
          <div class="news-card__data">{{ info.data }}</div>
          <div class="news-card__title">{{ info.title }}</div>
          <div class="news-card__body">
            {{ info.information }}
          </div>
          <router-link to="/news" class="news-card__btn">подробнее</router-link>
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
    news: [
      {
        img: require("@/assets/img/news/news_1.png"),
        data: "23 June 2020",
        title: "KENYA’S CHIEF JUSTICE ISSUES…",
        information:
          "PRACTICE NOTES AND DIRECTIONS NO OF 2020 MADE PURSUANT TO SECTION 81(3) OF THE CIVIL PROCEDURE ACT…",
      },

      {
        img: require("@/assets/img/news/news_2.png"),
        data: "23 June 2020",
        title: "KENYA’S CHIEF JUSTICE ISSUES…",
        information:
          "PRACTICE NOTES AND DIRECTIONS NO OF 2020 MADE PURSUANT TO SECTION 81(3) OF THE CIVIL PROCEDURE ACT…",
      },
      {
        img: require("@/assets/img/news/news_3.png"),
        data: "23 June 2020",
        title: "KENYA’S CHIEF JUSTICE ISSUES…",
        information:
          "PRACTICE NOTES AND DIRECTIONS NO OF 2020 MADE PURSUANT TO SECTION 81(3) OF THE CIVIL PROCEDURE ACT…",
      },
    ],
  }),
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      loop: false,
      slidesPerView: 3,
      spaceBetween: 55,
      grabCursor: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        762: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        },
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