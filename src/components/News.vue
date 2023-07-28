<template>
  <section class="news-card__container container">
    <div class="news-card__section-title">Новости</div>

    <div class="news-card__container-pos">
      <div class="news_card" v-for="info in news" :key="info.id">
        <div class="news-card__img-container">
          <img class="news-card__img" :src="info.photo" alt="" />
        </div>

        <div class="news-card__txt">
          <div class="news-card__data">{{ formatDate(info.created) }}</div>
          <div class="news-card__title">{{ info.title }}</div>
          <div class="news-card__body">
            {{ info.subtitle }}
          </div>
          <a class="news-card__btn" @click="getNewsDetails(info.id)"
            >подробнее</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatDate } from "@/use/prettify";
export default {
  data: () => ({
    formatDate,
  }),
  computed: {
    ...mapGetters("news", ["news", "infoNews"]),
  },
  methods: {
    logMethods() {
      console.log(this.news);
    },
    ...mapActions("news", ["getNews", "getInfoNews"]),

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
    this.getNews();
  
  },
};
</script>

<style>
</style>