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
    hero: require("@/assets/img/info/10501-1.jpg"),
    icon: require("@/assets/img/info/card-product-icon.svg"),
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

