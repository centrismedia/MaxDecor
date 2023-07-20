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
            <a
              id="collections_p"
              ref="navDropdown"
              @click="toggleMenu(), closeDropdown()"
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
          <router-link
            class="menu-i"
            to="/product"
            v-for="item in collections"
            :key="item.id"
            >{{ item.title }}</router-link
          >
        </div>

        <div class="nav__second-line__right-container">
          <div class="nav__second-line__icon-container">
            <div class="nav__select">
              <img :src="select" alt="" />
            </div>
            <div class="nav__basket" @click="toggleBasket">
              <img :src="bascket" alt="" />
            </div>
          </div>

          <div
            class="nav__lang-container"
            ref="navLang"
            @click="toggleLangContainer"
            :class="{ 'nav__lang-container-active': langContainerIsActive }"
          >
            <p>RU</p>
            <img
              :src="arrow"
              alt=""
              class="nav-arrow"
              :class="{ deg180: langContainerIsActive }"
            />
          </div>
          <div
            class="nav__lang-container_select"
            :class="{
              'nav__lang-container_select-active': langContainerIsActive,
            }"
          >
            <p>EN</p>
            <p>UZ</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    logo: require("@/assets/img/header/header-logo.svg"),
    search: require("@/assets/img/header/header-search.svg"),
    arrow: require("@/assets/img/header/header-arrow.svg"),
    select: require("@/assets/img/header/header-select.svg"),
    bascket: require("@/assets/img/header/header-bascket.svg"),
    menuIsActive: false,
    langContainerIsActive: false,
  }),
  computed: { ...mapGetters("collections", ["collections"]) },
  methods: {
    ...mapActions("collections", ["getCollections"]),
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive;
    },
    closeDropdown(event) {
      if (!this.$refs.navDropdown.contains(event.target)) {
        this.menuIsActive = false;
      }
    },
    closeLang(event) {
      if (!this.$refs.navLang.contains(event.target)) {
        this.langContainerIsActive = false;
      }
    },
    toggleBasket() {
      this.$emit("toggle-basket");
    },

    toggleLangContainer() {
      this.langContainerIsActive = !this.langContainerIsActive;
    },
  },
  async mounted() {
    window.addEventListener("click", this.closeDropdown);
    window.addEventListener("click", this.closeLang);
    await this.getCollections();
  },

  beforeDestroy() {
    window.removeEventListener("click", this.closeDropdown);
    window.removeEventListener("click", this.closeLang);
  },
};
</script>

<style>
</style>
