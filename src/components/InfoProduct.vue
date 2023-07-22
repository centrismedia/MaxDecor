<template>
  <div class="info-product">
    <div class="navigation-chain__container container">
      <a href="">Коллекции</a>
      <div class="navigation-chain__delimiter"></div>
      <a class="navigation-chain__current" href="">Bricly</a>
    </div>
    <section class="description-product__container container">
      <div class="description-product__left-card">
        <p class="description-product__left-card_title">Коллекция Bricly</p>
        <p class="description-product__left-card_body">
          Кухня — это самое популярное место в доме, место всеобщего сбора,
          пространство, где получаешь удовольствие, как от приготовления пищи,
          так и от прекрасного времяпрепровождения.
        </p>
      </div>
      <div class="description-product__right-card">
        <p>
          Но на ряду с этим, кухня одно из самых часто часто загрязняемых мест в
          квартире. Поэтому обои для вашей кухни должны прекрасно чиститься с
          использованием специальных моющих средств. Коллекция обоев «BRICLY» —
          не боится многократного намокания, а его структура удерживает влагу на
          поверхности и не допускает её впитывания в основу обоев.
        </p>
      </div>
    </section>
    <section class="card-product__container container">
      <!-- Блок с фото -->
      <div class="card-product__img-container transition">
        <div
          :style="{ background: 'url(' + hero + ') center center / cover' }"
          class="card-product__img transition"
        ></div>
      </div>

      <!-- Блок с информацией -->
      <div class="card-product__info">
        <div class="product-carousel__mob">
          <div
            id="slide_1"
            class="product-carousel__mob-slide"
            v-for="slide in slides"
            :key="slide.id"
            @click="changeHeroImg(slide)"
          >
            <img :src="slide.img" alt="" />
            <p>{{ slide.id }} <span>10501</span></p>
          </div>
        </div>

        <div class="description-product__wrapper-mob">
          <div class="description-product__btn-mob" @click="openDescr">
            Смотреть описание
            <img
              class="description-product__arrow"
              :class="{'description-product__arrow__active': isOpenDescr}"
              :src="arrow"
              alt=""
            />
          </div>
          <div
            class="description-product__container-mob"
            :class="{
              'description-product__container-mob__active': isOpenDescr,
            }"
            ref="descr"
          >
            <div class="description-product__top-mob__container">
              <p class="description-product__top-mob__title">
                Коллекция Bricly
              </p>
              <p class="description-product__top-mob__text">
                Кухня — это самое популярное место в доме, место всеобщего
                сбора, пространство, где получаешь удовольствие, как от
                приготовления пищи, так и от прекрасного времяпрепровождения.
              </p>
            </div>

            <p class="description-product__bot-mob__text">
              Но на ряду с этим, кухня одно из самых часто часто загрязняемых
              мест в квартире. Поэтому обои для вашей кухни должны прекрасно
              чиститься с использованием специальных моющих средств. Коллекция
              обоев «BRICLY» — не боится многократного намокания, а его
              структура удерживает влагу на поверхности и не допускает её
              впитывания в основу обоев.
            </p>
          </div>
        </div>

        <div class="card-product__title-container">
          <div class="card-product__title">
            <p class="card-product__title_name">Коллекция Bricly</p>
            <p class="card-product__title_vendor">
              Артикул&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10501
            </p>
          </div>
          <div class="card-product__title-icon">
            <img :src="icon" alt="" />
          </div>
        </div>

        <div class="card-product__options-container">
          <div class="card-product__options">
            <p class="card-product__options_key">Бренд</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">DILMAX</p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Тип рисунка</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">Флористика</p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Тип помещения</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">Гостиная</p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Размер рулона</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">1.06 х 10.05</p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Способ производства</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">Горячее тиснение</p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Основа</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">Флизелиновая</p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Рулонов в коробке</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">6</p>
          </div>
        </div>

        <div class="card-product__price-container">
          <p class="card-product__price">545 000 сум</p>
          <P class="card-product__price-descr">цена указана за один рулон</P>
        </div>

        <div class="card-product__quantity">
          <div class="card-product__minus">-</div>
          <input class="card-product__input" type="number" />
          <div class="card-product__plus">+</div>
        </div>

        <div class="card-product__btn-container">
          <div class="card-product__btn-call">ЗАКАЗАТЬ ЗВОНОК</div>
          <div class="card-product__add-basket">ДОБАВИТЬ В КОРЗИНУ</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpenDescr: false,
    hero: require("@/assets/img/info/10501-1.jpg"),
    icon: require("@/assets/img/info/card-product-icon.svg"),
    arrow: require("@/assets/img/info/arrow.svg"),
    slides: [
      {
        img: require("@/assets/img/slider/10501-1.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-2.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-3.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-4.jpg"),
        name: "Bricly",
      },
      {
        img: require("@/assets/img/slider/10501-5.jpg"),
        name: "Bricly",
      },
    ],
  }),
  props: {
    hero: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateHeroImage(image) {
      const img = document.querySelector(".card-product__img");
      img.classList.add("hidden");

      setTimeout(() => {
        this.hero = image;
        img.classList.remove("hidden");
      }, 300); // Задержка 300 мс (0.3 сек)
    },
    changeHeroImg(slide) {
      this.$emit("update-hero-image", slide.img);
    },
    openDescr() {
      this.isOpenDescr = !this.isOpenDescr;
      if (this.isOpenDescr) {
        this.$refs.descr.style.maxHeight = this.$refs.descr.scrollHeight + "px";
      } else {
        this.$refs.descr.style.maxHeight = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.transition {
  transition: opacity 0.3s ease, background-image 0.3s ease;
  opacity: 1;
}

.transition.hidden {
  opacity: 0;
}
</style>
