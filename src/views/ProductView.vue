<template>
  <div class="home">
    <Basket :basketOpen="basketOpen" />
    <VideoSlider />
    <InfoProduct />
    <ProductsSlider />
    <CollectionSlider />
    <News />
    <FormCard />
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
import Basket from "@/components/Basket.vue";
import InfoProduct from "@/components/InfoProduct.vue";
import ProductsSlider from "@/components/ProductsSlider.vue";
import CollectionSlider from "@/components/CollectionSlider.vue";
import News from "@/components/News.vue";
import FormCard from "@/components/FormCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Basket,

    InfoProduct,
    ProductsSlider,
    CollectionSlider,
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