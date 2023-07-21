<template>
  <section class="personalArea__exit container">
    <img :src="exitImg" alt="" />
    <p>Вы вышли из Личного Кабинета.</p>
    <p>
      Ваша корзина покупок была сохранена. Она будет восстановлена при следующем
      входе в Ваш Личный Кабинет.
    </p>
    <router-link to="/" class="personalArea__exit-btn">ПРОДОЛЖИТЬ</router-link>
  </section>
</template>

<script>
export default {
  data: () => ({
    exitImg: require("@/assets/img/exit-icon.svg"),
    deleteImg: require("@/assets/img/basket/basket-item__delete.svg"),
    basketFirstImg: require("@/assets/img/basket/basket_BIG_img.png"),
  }),
};
</script>

<style>
</style>