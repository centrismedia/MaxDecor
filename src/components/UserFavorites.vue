<template>
  <section class="personalArea__select container">
    <!-- Карточка -->
    <div class="personalArea-card__container">
      <div class="personalArea-card__item">
        <div class="personalArea-card__img">
          <img :src="basketFirstImg" alt="" />
        </div>

        <div class="personalArea-card__body">
          <div class="personalArea-card-item__name">Bricly</div>
          <div class="personalArea-card-item__price">545 000 сум</div>
          <div class="personalArea-card-item__add-basket">
            Добавить в корзину
          </div>
        </div>

        <div class="personalArea-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
      <div class="personalArea-card__under-line"></div>
    </div>

    <div class="personalArea-card__container">
      <div class="personalArea-card__item">
        <div class="personalArea-card__img">
          <img :src="basketFirstImg" alt="" />
        </div>

        <div class="personalArea-card__body">
          <div class="personalArea-card-item__name">Bricly</div>
          <div class="personalArea-card-item__price">545 000 сум</div>
          <div class="personalArea-card-item__add-basket">
            Добавить в корзину
          </div>
        </div>

        <div class="personalArea-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
      <div class="personalArea-card__under-line"></div>
    </div>

    <div class="personalArea-card__container">
      <div class="personalArea-card__item">
        <div class="personalArea-card__img">
          <img :src="basketFirstImg" alt="" />
        </div>

        <div class="personalArea-card__body">
          <div class="personalArea-card-item__name">Bricly</div>
          <div class="personalArea-card-item__price">545 000 сум</div>
          <div class="personalArea-card-item__add-basket">
            Добавить в корзину
          </div>
        </div>

        <div class="personalArea-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
      <div class="personalArea-card__under-line"></div>
    </div>

    <div class="personalArea-card__container">
      <div class="personalArea-card__item">
        <div class="personalArea-card__img">
          <img :src="basketFirstImg" alt="" />
        </div>

        <div class="personalArea-card__body">
          <div class="personalArea-card-item__name">Bricly</div>
          <div class="personalArea-card-item__price">545 000 сум</div>
          <div class="personalArea-card-item__add-basket">
            Добавить в корзину
          </div>
        </div>

        <div class="personalArea-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
      <div class="personalArea-card__under-line"></div>
    </div>

    <div class="personalArea-card__container">
      <div class="personalArea-card__item">
        <div class="personalArea-card__img">
          <img :src="basketFirstImg" alt="" />
        </div>

        <div class="personalArea-card__body">
          <div class="personalArea-card-item__name">Bricly</div>
          <div class="personalArea-card-item__price">545 000 сум</div>
          <div class="personalArea-card-item__add-basket">
            Добавить в корзину
          </div>
        </div>

        <div class="personalArea-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
      <div class="personalArea-card__under-line"></div>
    </div>

    <div class="personalArea-card__container">
      <div class="personalArea-card__item">
        <div class="personalArea-card__img">
          <img :src="basketFirstImg" alt="" />
        </div>

        <div class="personalArea-card__body">
          <div class="personalArea-card-item__name">Bricly</div>
          <div class="personalArea-card-item__price">545 000 сум</div>
          <div class="personalArea-card-item__add-basket">
            Добавить в корзину
          </div>
        </div>

        <div class="personalArea-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
      <div class="personalArea-card__under-line"></div>
    </div>
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