<template>
  <div class="home">
    <Header />
    <TheFilter />
    <TableCards />
    <VideoPlayer />
    <News />
    <FormCard />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TheFilter from "@/components/TheFilter.vue";
import TableCards from "@/components/TableCards.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import News from "@/components/News.vue";
import FormCard from "@/components/FormCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    TheFilter,
    TableCards,
    VideoPlayer,
    News,
    FormCard,
    Footer,
  },
  data: () => ({
    basketOpen: false,
  }),
  methods: {
    toggleFavoriteIcon(index) {
      this.$emit("toggle-favorite-icon", index);
    },
  },
};
</script>

<style>
</style>
