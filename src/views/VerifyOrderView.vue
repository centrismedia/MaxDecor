<template>
  <div>
    <div class="navigation-chain__container container">
      <a href="">Главная</a>
      <div class="navigation-chain__delimiter"></div>
      <a class="navigation-chain__current" href="">Оформить заказ</a>
    </div>

    <!-- Заголовок страницы -->
    <div class="checkout__title container">Оформить заказ</div>

    <!-- Контейнер карточек -->
    <section class="checkout-card__container container">
      <div class="checkout-card__item" v-for="order in orders" :key="order.id">
        <div class="checkout-card__img-name__position">
          <div class="checkout-card__img">
            <img :src="order.img" alt="" />
          </div>
          <div class="checkout-card__body">
            <div class="checkout-card-item__name">{{ order.name }}</div>
            <div class="checkout-card-item__price">{{ order.price }}</div>
          </div>
        </div>

        <div class="checkout-card__quantity">
          <div class="checkout-card__minus">-</div>
          <input class="checkout-card__input" type="number" />
          <div class="checkout-card__plus">+</div>
        </div>

        <div class="checkout-card-item__delete">
          <img :src="deleteImg" alt="" />
        </div>
      </div>
    </section>

    <!-- Форма  -->
    <section class="checkout-form__container container">
      <form id="buy" class="form-personal-area" action="">
        <div class="form__buyer">
          <div class="form__shop-title">
            <div class="form__shop-title_numb">1</div>
            <div class="form__shop-title_name">Данные покупателя</div>
          </div>

          <div class="form__buyer-row">
            <p class="form__buyer-row_title">Ваше имя</p>
            <input
              placeholder="Ваше имя"
              class="form__buyer-row_input"
              type="text"
              required
            />
          </div>

          <div class="form__buyer-row">
            <p class="form__buyer-row_title">Ваш номер телефона</p>
            <input
              placeholder="Ваш номер телефона"
              class="form__buyer-row_input"
              type="tel"
              required
            />
          </div>

          <div class="form__buyer-row">
            <p class="form__buyer-row_title">Ваш Email</p>
            <input
              placeholder="Ваш Email "
              class="form__buyer-row_input"
              type="email "
            />
          </div>
        </div>

        <div class="form__shop">
          <div class="form__shop-title">
            <div class="form__shop-title_numb">2</div>
            <div class="form__shop-title_name">Выберите магазин</div>
          </div>

          <div class="form__shop_input-drop">
            <div class="form__shop-input__container">
              <input
                placeholder="Адреса магазинов"
                class="form__shop-input"
                type="text"
                required
              />
              <div class="form__shop-input_selector">
                <i class="far fa-chevron-down"></i>
              </div>
            </div>

            <div
              class="form__shop-drop-list"
              v-for="address in filials"
              :key="address.id"
            >
              <div class="form__shop-drop-list_item">{{ address.name }}</div>
            </div>
          </div>
        </div>

        <div class="form__receiving">
          <div class="form__shop-title">
            <div class="form__shop-title_numb">3</div>
            <div class="form__shop-title_name">Выберите способ приёма</div>
          </div>

          <div class="form__receiving-row">
            <RadioButton
              id="reception1"
              name="reception "
              value="Pickup"
              v-model="reception"
            />
            <label for="reception1"> Самовывоз </label>
          </div>

          <div class="form__receiving-row">
            <RadioButton
              id="reception2"
              name="reception "
              value="Delivery"
              v-model="reception"
            />
            <label for="reception2"> Доставка </label>
          </div>
        </div>

        <div class="form__receiving">
          <div class="form__shop-title">
            <div class="form__shop-title_numb">4</div>
            <div class="form__shop-title_name">Способ оплаты</div>
          </div>

          <div class="form__receiving-row">
            <RadioButton
              id="payment1"
              name="payment"
              value="uponКeceipt"
              v-model="payment"
            />
            <label for="payment1"> Наличными или картой при получении </label>
          </div>

          <div class="form__receiving-row">
            <RadioButton
              id="payment2"
              name="payment"
              value="Payme"
              v-model="payment"
            />
            <label for="payment2"> Payme </label>
          </div>

          <div class="form__receiving-row">
            <RadioButton
              id="payment3"
              name="payment"
              value="Uzum bank"
              v-model="payment"
            />
            <label for="payment3"> Uzum bank </label>
          </div>
        </div>
      </form>

      <!-- Карточка формы -->
      <div class="form__card">
        <div class="form-card__body">
          <div class="form-card__body-title">Коллекция</div>

          <div class="form-card__body-line"></div>

          <div class="form-card__body-item">
            <p>Bricly</p>
          </div>

          <div class="form-card__body-item">
            <p>Количество рулонов</p>
            <p>10</p>
          </div>

          <div class="form-card__body-item">
            <p>Способ оплаты</p>
            <p>Peyme</p>
          </div>

          <div class="form-card__body-item">
            <p>Стоимость доставки</p>
            <p>бесплатно</p>
          </div>

          <div class="form-card__body-line"></div>

          <div class="form-card__body-total">
            <p>Общая сумма</p>
            <p>1 500 000 сум</p>
          </div>
        </div>

        <div class="form-card__bottom">
          <div class="form-card__bottom-consent">
            <input form="buy" type="checkbox" id="consent" required />
            <label for="consent"
              >Мною прочитаны и я даю согласие с документом
              <a href="">Пользовательского соглашения</a></label
            >
          </div>
          <button form="buy" type="submit" class="form-card__bottom-btn">
            ОФОРМИТЬ ЗАКАЗ
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RadioButton from "primevue/radiobutton";
export default {
  components: {
    RadioButton,
  },
  data: () => ({
    deleteImg: require("@/assets/img/basket/basket-item__delete.svg"),
    basketSecondImg: require("@/assets/img/basket/basket-img-2.png"),
    orders: [
      {
        img: require("@/assets/img/basket/basket_BIG_img.png"),
        name: "Bricly",
        price: "545 000 сум",
      },
      {
        img: require("@/assets/img/basket/basket_BIG_img.png"),
        name: "Bricly",
        price: "545 000 сум",
      },
      {
        img: require("@/assets/img/basket/basket_BIG_img.png"),
        name: "Bricly",
        price: "545 000 сум",
      },
    ],
    reception: null,
    payment: null,
    filials: [
      { name: "Паркентский" },
      { name: "Куйлюк" },
      { name: "Беруни" },
      { name: "Кадышева" },
      { name: "Чилонзар" },
      { name: "Union Bank" },
      { name: "Kuda Microfinamce Bank" },
      { name: "First Bank" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.p-radiobutton-box {
  border: 5px solid #ced4da !important;
}
</style>
