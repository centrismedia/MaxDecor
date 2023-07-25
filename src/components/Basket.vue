<template>
  <aside class="basket__container" @click.stop="">
    <div class="blackout" @click="toggleBasket()"></div>

    <div class="basket__pos">
      <div class="basket__wrapper">
        <div class="aside__title">
          <div class="basket__title">Корзина</div>
          <a class="basket__clear" href="">Отчистить корзину</a>
        </div>

        <div class="basket__item">
          <div class="basket__img-name__position">
            <div class="basket__img">
              <img :src="basketFirstImg" alt="" />
            </div>
            <div class="basket__body">
              <div class="basket-item__name">Bricly</div>
              <div class="basket-item__price">545 000 сум</div>
            </div>
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
          <div class="basket__img-name__position">
            <div class="basket__img">
              <img :src="basketFirstImg" alt="" />
            </div>
            <div class="basket__body">
              <div class="basket-item__name">Bricly</div>
              <div class="basket-item__price">545 000 сум</div>
            </div>
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
          <div class="basket__img-name__position">
            <div class="basket__img">
              <img :src="basketFirstImg" alt="" />
            </div>
            <div class="basket__body">
              <div class="basket-item__name">Bricly</div>
              <div class="basket-item__price">545 000 сум</div>
            </div>
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
          <div class="basket__img-name__position">
            <div class="basket__img">
              <img :src="basketFirstImg" alt="" />
            </div>
            <div class="basket__body">
              <div class="basket-item__name">Bricly</div>
              <div class="basket-item__price">545 000 сум</div>
            </div>
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
          <div class="basket__img-name__position">
            <div class="basket__img">
              <img :src="basketFirstImg" alt="" />
            </div>
            <div class="basket__body">
              <div class="basket-item__name">Bricly</div>
              <div class="basket-item__price">545 000 сум</div>
            </div>
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
          <a class="aside__close" @click="toggleBasket"> ПРОДОЛЖИТЬ ПОКУПКИ </a>
          <router-link
            @click.native="toggleBasket"
            to="/verify-order"
            class="aside_buy"
            >ОФОРМИТЬ ЗАКАЗ</router-link
          >
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
  }),
  methods: {
    toggleBasket() {
      this.$emit("toggle-basket");
    },
  },
};
</script>

<style></style>
