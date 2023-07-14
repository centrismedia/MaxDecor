<template>
  <nav class="nav__container">
    <div class="nav__container-pos container">
      <!-- Первая линия -->
      <div class="nav__first-line">
        <router-link to="/" class="nav__logo-container">
          <img class="nav__logo" :src="logo" alt="" />
        </router-link>

        <div class="nav__search-container">
          <label class="nav__search-label" for="nav_search">
            <img :src="search" alt="" />
          </label>
          <input
            class="nav__search-input"
            type="search"
            name=""
            id="nav_search"
            placeholder="Поиск..."
          />
          <button class="nav__search-btn" type="submit">искать</button>
        </div>

        <router-link class="nav__login-auth" to="/auth">
          <p>Регистрация /Авторизация</p>
        </router-link>
      </div>

      <!-- Вторая линия -->
      <div class="nav__second-line">
        <div class="nav__nav">
          <div id="collections" class="nav__nav-collections">
            <a id="collections_p" @click="toggleMenu"
              >Коллекции
              <img
                id="nav__nav_arrow"
                class="nav__nav-arrow"
                :src="arrow"
                :class="{ active_arrow: menuIsActive }"
                alt=""
            /></a>
          </div>
          <router-link class="nav__nav-about" to="/company"
            >О фабрике</router-link
          >
          <a class="nav__nav-Show" href="">Шоурум</a>
          <router-link class="nav__nav-new" to="news">Новости</router-link>
          <a class="nav__nav-buy" href="">Где купить?</a>
          <a class="nav__nav-cont" href="">Контакты</a>
        </div>

        <div
          id="nav_drop_menu"
          class="nav__drop-menu-container"
          :class="{ active: menuIsActive }"
        >
          <router-link class="menu-i" to="/product">Bricly</router-link>
          <router-link class="menu-i" to="/product">Karacum</router-link>
          <router-link class="menu-i" to="/product">Magik</router-link>
          <router-link class="menu-i" to="/product">Carat</router-link>
          <router-link class="menu-i" to="/product">Plants</router-link>
          <router-link class="menu-i" to="/product">Bricly</router-link>
          <router-link class="menu-i" to="/product">Karacum</router-link>
          <router-link class="menu-i" to="/product">Magik</router-link>
          <router-link class="menu-i" to="/product">Carat</router-link>
          <router-link class="menu-i" to="/product">Plants</router-link>
        </div>

        <div class="nav__second-line__right-container">
          <div class="nav__second-line__icon-container">
            <div class="nav__select">
              <img :src="select" alt="" />
            </div>
            <div class="nav__basket">
              <img :src="bascket" alt="" @click="toggleBasket" />
            </div>
          </div>
          <div class="nav__lang-container">
            <p>RU</p>
            <img :src="arrow" alt="" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    logo: require("@/assets/img/header/header-logo.svg"),
    search: require("@/assets/img/header/header-search.svg"),
    arrow: require("@/assets/img/header/header-arrow.svg"),
    select: require("@/assets/img/header/header-select.svg"),
    bascket: require("@/assets/img/header/header-bascket.svg"),
    menuIsActive: false,
  }),
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive;
    },
    toggleBasket() {
      this.$emit("toggle-basket");
    },
    ttoggleFavoriteIcon(index) {
      const cardFigureBtnFavIcon = document.querySelectorAll(
        ".card__figure-btn-fav-icon"
      );
      const navSelect = document.querySelector(".nav__select");

      cardFigureBtnFavIcon[index].classList.toggle(
        "card__figure-btn-fav-icon_select"
      );

      if (
        cardFigureBtnFavIcon[index].classList.contains(
          "card__figure-btn-fav-icon_select"
        )
      ) {
        navSelect.classList.add("nav__select-click");
        setTimeout(function () {
          navSelect.classList.remove("nav__select-click");
        }, 1500);
      }
    },
  },
};
</script>

<style>
</style>