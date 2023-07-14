<template>
  <div>
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
      <div class="card-product__img-container">
        <img class="card-product__img" :src="hero" alt="" />
      </div>

      <!-- Блок с информацией -->
      <div class="card-product__info">
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
    hero: require("@/assets/img/info/10501-1.jpg"),
    icon: require("@/assets/img/info/card-product-icon.svg"),
  }),
};
</script>

<style>
</style>