
<template>
  <div class="info-product">
    <div class="navigation-chain__container container">
      <a href="">Коллекции</a>
      <div class="navigation-chain__delimiter"></div>
      <a class="navigation-chain__current" href="">{{
        infoProductData.title
      }}</a>
    </div>
    <section class="description-product__container container">
      <div class="description-product__left-card">
        <p class="description-product__left-card_title">
          Коллекция {{ infoProductData.title }}
        </p>
        <p class="description-product__left-card_body">
          {{ infoProductData.description }}
        </p>
      </div>
      <div class="description-product__right-card">
        <p>
          {{ infoProductData.description }}
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
            v-for="slide in infoProductData.variants"
            :key="slide.id"
            @click="changeHeroImg(slide)"
          >
            <img :src="slide.photo" alt="" />
            <p>{{ slide.id }} <span>10501</span></p>
          </div>
        </div>
        <div class="description-product__wrapper-mob">
          <div class="description-product__btn-mob" @click="openDescr">
            Смотреть описание
            <img
              class="description-product__arrow"
              :class="{ 'description-product__arrow__active': isOpenDescr }"
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
            <p class="card-product__title_name">
              Коллекция {{ infoProductData.title }}
            </p>
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
            <p
              class="card-product__options_value"
              v-for="item in infoProductData.brand"
              :key="item.id"
            >
              {{ item.title }}
            </p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Тип рисунка</p>
            <div class="card-product__options_line"></div>
            <p
              class="card-product__options_value"
              v-for="item in infoProductData.picture_type"
              :key="item.id"
            >
              {{ item.title }}
            </p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Тип помещения</p>
            <div class="card-product__options_line"></div>
            <p
              class="card-product__options_value"
              v-for="item in infoProductData.target_room"
              :key="item.id"
            >
              {{ item.title }}
            </p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Размер рулона</p>
            <div class="card-product__options_line"></div>
            <p
              class="card-product__options_value"
              v-for="item in infoProductData.size"
              :key="item.id"
            >
              {{ item.height }} х {{ item.height }}
            </p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Способ производства</p>
            <div class="card-product__options_line"></div>
            <p
              class="card-product__options_value"
              v-for="item in infoProductData.manufacturing_method"
              :key="item.id"
            >
              {{ item.title }}
            </p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Основа</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">
              {{ infoProductData.building_material.title }}
            </p>
          </div>

          <div class="card-product__options">
            <p class="card-product__options_key">Рулонов в коробке</p>
            <div class="card-product__options_line"></div>
            <p class="card-product__options_value">
              {{ infoProductData.no_in_pack }}
            </p>
          </div>
        </div>

        <div class="card-product__price-container">
          <p class="card-product__price">
            {{ prettifySum(infoProductData.price) }}
          </p>
          <p class="card-product__price-descr">цена указана за один рулон</p>
        </div>
        <div class="card-product__quantity">
          <div class="card-product__minus" @click="decrementQuantity">-</div>
          <div>{{ quantity }}</div>
          <div class="card-product__plus" @click="incrementQuantity">+</div>
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
import { mapActions, mapGetters } from "vuex";
import { prettifySum } from "@/use/prettify";
export default {
  data: () => ({
    isOpenDescr: false,
    hero: require("@/assets/img/info/10501-1.jpg"),
    icon: require("@/assets/img/info/card-product-icon.svg"),
    arrow: require("@/assets/img/info/arrow.svg"),
    quantity: 1,
    prettifySum,
  }),
  props: {
    hero: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("products", ["products", "infoProduct"]),
    ...mapGetters("collections", ["collections"]),

    infoProductData() {
      return this.infoProduct;
    },
    totalPrice() {
      return (this.quantity * this.infoProductData.price).toFixed(2); // Using toFixed to format the price to two decimal places
    },
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    changeHeroImg(slide) {
      this.$emit("update-hero-image", slide.photo);
    },
    openDescr() {
      this.isOpenDescr = !this.isOpenDescr;
      if (this.isOpenDescr) {
        this.$refs.descr.style.maxHeight = this.$refs.descr.scrollHeight + "px";
      } else {
        this.$refs.descr.style.maxHeight = "";
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    ...mapActions("products", ["getProducts", "getInfoProduct"]),
    ...mapActions("collections", ["getCollections"]),
    updateHeroImage(image) {
      const img = document.querySelector(".card-product__img");
      img.classList.add("hidden");

      setTimeout(() => {
        this.hero = image;
        img.classList.remove("hidden");
      }, 300); // Задержка 300 мс (0.3 сек)
    },
    async fetchProductDetails(productId) {
      try {
        // Call the getInfoProduct action to fetch the data
        await this.getInfoProduct(productId);

        // Once the data is fetched, update the component's data with the received information
        this.hero = this.infoProductData.photo;
        // Update other data properties as needed
        // ...
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    // Get the product ID from the route parameter
    const productId = this.$route.params.id;

    // Fetch the product details using the product ID
    await this.fetchProductDetails(productId);
    console.log(this.infoProductData);
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





