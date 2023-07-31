<template>
  <section class="news-card__container container swiper" ref="swiper">
    <div class="news-card__section-title">{{ pageTitle }}</div>

    <div class="news-card__container-pos swiper-wrapper">
      <div class="news_card swiper-slide" v-for="info in news" :key="info.id">
        <div class="news-card__img-container">
          <img class="news-card__img" :src="info.photo" alt="" />
        </div>

        <div class="news-card__txt">
          <div class="news-card__data">{{ formatDate(info.created) }}</div>
          <div class="news-card__title">{{ info.title }}</div>
          <div class="news-card__body">
            {{ info.subtitle }}
          </div>
        </div>
        <a class="news-card__btn" @click="getNewsDetails(info.id)">подробнее</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatDate } from "@/use/prettify";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default {
  data: () => ({
    formatDate,
  }),
  computed: {
    ...mapGetters("news", ["news", "infoNews"]),
    pageTitle() {
      // Check if the current route name is "news" and return the appropriate title
      return this.$route.name === "news"
        ? this.$t("otherNews")
        : this.$t("news");
    },
  },
  methods: {
    ...mapActions("news", ["getNews", "getInfoNews"]),
    onWindowResize() {
      if (this.swiper) {
        this.swiper.destroy();
        this.initSwiper();
      }
    },
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        modules: [Navigation],
        loop: true,
        slidesPerView: 3,
  
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
      });
    },
    logMethods() {
      console.log(this.news);
    },

    async getNewsDetails(newsId) {
      console.log("News ID:", newsId);
      if (!newsId) {
        console.error("Invalid News ID");
        return;
      }

      // Check if the user is already on the news details route
      if (this.$route.name === "news" && this.$route.params.id === newsId) {
        console.warn("Already on the news details page.");
        return;
      }

      await this.$store.dispatch("news/getInfoNews", newsId);
      this.$router.push({ name: "news", params: { id: newsId } });
    },
  },
  async mounted() {
    await new Promise((resolve) => setTimeout(resolve, 100));

    this.initSwiper();
    this.getNews();
  },
};
</script>
<style></style>
