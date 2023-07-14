<template>
  <div class="home">
 
    <Basket :basketOpen="basketOpen" />
    <Header />
    <TheFilter />
    <TableCards @toggle-favorite-icon="toggleFavoriteIcon" />
    <VideoPlayer />
    <News />
    <FormCard />
    
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
import Basket from "@/components/Basket.vue";
import Header from "@/components/Header.vue";
import TheFilter from "@/components/TheFilter.vue";
import TableCards from "@/components/TableCards.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import News from "@/components/News.vue";
import FormCard from "@/components/FormCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Basket,
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
    toggleBasket() {
      this.basketOpen = !this.basketOpen;
    },
    toggleFavoriteCard(index) {
      this.cards[index].isActive = !this.cards[index].isActive;
    },
  },
};
</script>

<style>
</style>