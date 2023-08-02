<template>
  <div class="home">
    <Header  />
    <TheFilter />
    <TableCards  />
    <VideoPlayer data-aos="fade-up"  data-aos-duration="1000"/>
    <News data-aos="fade-up" data-aos-duration="1000" />
    <FormCard data-aos="fade-up" data-aos-duration="1000" />
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
      const navSelect = document.querySelector(".nav__select");
      if (navSelect) {
        navSelect.classList.add("nav__select-click");
        setTimeout(() => {
          navSelect.classList.remove("nav__select-click");
        }, 1500);
      }
    },
  },
};
</script>

<style>
</style>
