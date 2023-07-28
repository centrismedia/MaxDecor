<template>
  <div class="app" ref="app">
    <Navbar :basketOpen="basketOpen" @toggle-basket="toggleBasket" />
    <Basket
      :class="{ open_aside: basketOpen }"
      @toggle-basket="toggleBasket"
    />
    <div class="app-page">
      <transition name="fade" mode="out-in">
        <router-view
          @toggle-favorite-icon="toggleFavoriteIcon"
         
        ></router-view>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Cookies from "js-cookie";
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
      cartData: [],
    };
  },
  methods: {
    toggleBasket() {
      this.basketOpen = !this.basketOpen;
    },
  

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
