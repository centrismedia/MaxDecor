<template>
  <div class="app" ref="app">
    <Navbar :basketOpen="basketOpen" @toggle-basket="toggleBasket" />
    <Basket :class="{ open_aside: basketOpen }" @toggle-basket="toggleBasket" />
    <div class="app-page">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
import Footer from "@/components/Footer.vue";
import Basket from "@/components/Basket.vue";

export default {
  components: {
    Navbar,
    Footer,
    Basket,
  },
  data() {
    return {
      basketOpen: false,
    };
  },
  methods: {
    toggleBasket() {
      this.basketOpen = !this.basketOpen;
    },
  },
  mounted() {
    window.addEventListener("click", this.closeBasket);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeBasket);
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
