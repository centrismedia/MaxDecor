<template>
  <div class="app">
    <Navbar></Navbar>
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

export default {
  components: {
    Navbar,
    Footer,
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
