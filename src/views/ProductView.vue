<template>
  <div class="home">
    <Basket data-aos="fade-up" :basketOpen="basketOpen" />
    <VideoSlider data-aos="fade-up" />
    <InfoProduct data-aos="fade-up"
      :hero="hero"
      
      @update-hero-image="updateHeroImage"
    />
    <ProductsSlider data-aos="fade-up" @update-hero-image="updateHeroImage" />
    <CollectionSlider data-aos="fade-up" />
    <News data-aos="fade-up" />
    <FormCard data-aos="fade-up" />
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
import Basket from "@/components/Basket.vue";
import InfoProduct from "@/components/InfoProduct.vue";
import VideoSlider from "@/components/VideoSlider.vue";
import ProductsSlider from "@/components/ProductsSlider.vue";
import CollectionSlider from "@/components/CollectionSlider.vue";
import News from "@/components/News.vue";
import FormCard from "@/components/FormCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Basket,
    VideoSlider,
    InfoProduct,
    ProductsSlider,
    CollectionSlider,
    News,
    FormCard,
    Footer,
  },
  data: () => ({
    basketOpen: false,
    hero: require("@/assets/img/info/10501-1.jpg"),
  }),
  methods: {
    toggleBasket() {
      this.basketOpen = !this.basketOpen;
    },
    toggleFavoriteCard(index) {
      this.cards[index].isActive = !this.cards[index].isActive;
    },
    toggleFavoriteCard(index) {
      this.cards[index].isActive = !this.cards[index].isActive;
    },
    updateHeroImage(image) {
      this.hero = image;
    },
  },
};
</script>

<style>
</style>