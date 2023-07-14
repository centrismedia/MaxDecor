<template>
  <aside class="basket__container" v-show="basketOpen">
    <div class="blackout"></div>

    <div class="basket__pos">
      <div class="basket__wrapper">
        <div class="aside__title">
          <div class="basket__title">Корзина</div>
          <a class="basket__clear" href="">Отчистить корзину</a>
        </div>

        <div class="basket__item">
          <div class="basket__img">
            <img :src="basketFirstImg" alt="" />
          </div>
          <div class="basket__body">
            <div class="basket-item__name">Bricly</div>
            <div class="basket-item__price">545 000 сум</div>
          </div>

          <div class="basket__quantity">
            <div class="basket__minus">-</div>
            <input class="basket__input" type="number" />
            <div class="basket__plus">+</div>
          </div>

          <div class="basket-item__delete">
            <img :src="deleteImg" alt="" />
          </div>
        </div>

        <div class="basket__item">
          <div class="basket__img">
            <img :src="basketSecondImg" alt="" />
          </div>
          <div class="basket__body">
            <div class="basket-item__name">Caracum</div>
            <div class="basket-item__price">545 000 сум</div>
          </div>

          <div class="basket__quantity">
            <div class="basket__minus">-</div>
            <input class="basket__input" type="number" />
            <div class="basket__plus">+</div>
          </div>

          <div class="basket-item__delete">
            <img :src="deleteImg" alt="" />
          </div>
        </div>

        <div class="aside__btn-container">
          <div class="aside__close">ПРОДОЛЖИТЬ ПОКУПКИ</div>
          <div class="aside_buy">ОФОРМИТЬ ЗАКАЗ</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    deleteImg: require("@/assets/img/basket/basket-item__delete.svg"),
    basketSecondImg: require("@/assets/img/basket/basket-img-2.png"),
    basketFirstImg: require("@/assets/img/basket/basket_BIG_img.png"),
    basketOpen: false,
  }),
  methods: {
    toggleBasket() {
      this.basketOpen = !this.basketOpen;
    },
  },
  mounted() {
    const headerBasket = document.querySelector(".header__basket");
    const blackout = document.querySelector(".blackout");
    const asideClose = document.querySelector(".aside__close");

    headerBasket.addEventListener("click", this.toggleBasket);
    blackout.addEventListener("click", this.toggleBasket);
    asideClose.addEventListener("click", this.toggleBasket);
  },
  beforeUnmount() {
    const headerBasket = document.querySelector(".header__basket");
    const blackout = document.querySelector(".blackout");
    const asideClose = document.querySelector(".aside__close");

    headerBasket.removeEventListener("click", this.toggleBasket);
    blackout.removeEventListener("click", this.toggleBasket);
    asideClose.removeEventListener("click", this.toggleBasket);
  },
};
</script>

<style>
</style>