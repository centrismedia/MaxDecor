<template>
  <div class="home">
    <Basket :basketOpen="basketOpen" />
    <NewsTop />
    <News />
    <FormCard />
  </div>
</template>

<script>
import Basket from "@/components/Basket.vue";
import NewsTop from "@/components/NewsTop.vue";
import News from "@/components/News.vue";
import FormCard from "@/components/FormCard.vue";

export default {
  components: {
    Basket,
    News,
    NewsTop,
    FormCard,
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