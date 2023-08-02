<template>
  <div class="home">
    <Header />
    <Banner data-aos="fade-up" />
    <Company data-aos="fade-up" />
    <News data-aos="fade-up" />
    <FormCard data-aos="fade-up" />
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
import Basket from "@/components/Basket.vue";
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Company from "@/components/Company.vue";
import News from "@/components/News.vue";
import FormCard from "@/components/FormCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Basket,
    Header,
    Banner,
    Company,
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