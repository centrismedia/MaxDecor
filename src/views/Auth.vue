<template>
  <div class="home">
 
    <login-component></login-component>
    <Basket :basketOpen="basketOpen" />

  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
import Basket from "@/components/Basket.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Basket,
    Footer,
    LoginComponent,
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