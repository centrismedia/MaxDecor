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

        <!-- Кнопка открытия меню для телефона -->
        <div
          class="nav__btn-phone-menu"
          @click="toggleMobMenu"
          :class="{ 'nav__btn-phone-menu-active': mobMenuIsActive }"
        >
          <div
            class="btn-phone-menu__top"
            :class="{ 'btn-phone-menu__top-active': mobMenuIsActive }"
          ></div>
          <div
            class="btn-phone-menu__mid"
            :class="{ 'btn-phone-menu__mid-active': mobMenuIsActive }"
          ></div>
          <div
            class="btn-phone-menu__bot"
            :class="{ 'btn-phone-menu__bot-active': mobMenuIsActive }"
          ></div>
        </div>
      </div>

      <!-- Третья линия (для телефона)-->
      <div class="nav__third-line">
        <div class="third-line__search-container">
          <label class="third-line__search-label" for="third-line_search">
            <img :src="search" alt="" />
          </label>
          <input
            class="third-line__search-input"
            type="search"
            name=""
            id="third-line_search"
            placeholder="Поиск..."
          />
          <button class="third-line__search-btn" type="submit">искать</button>
        </div>
      </div>
    </div>

    <!-- Меню для телефона -->
    <div class="nav__menu-phone" :class="{ 'display-none': !mobMenuIsActive }">
      <div
        class="nav__menu-phone__item-container"
        :class="{ 'display-none': collectionActive }"
      >
        <div
          class="nav__menu-phone__item-collections"
          @click="toggleCollection"
        >
          Коллекции
        </div>
        <div class="nav__menu-phone__item">О фабрике</div>
        <div class="nav__menu-phone__item">Шоурум</div>
        <div class="nav__menu-phone__item">Новости</div>
        <div class="nav__menu-phone__item">Где купить?</div>
        <div class="nav__menu-phone__item">Контакты</div>
      </div>

      <div
        class="nav__menu-phone__collections-container"
        :class="{ 'display-none': !collectionActive }"
      >
        <div class="nav__menu-phone__prev" @click="toggleCollection">Назад</div>

        <div class="nav__menu-phone__collections-item">Bricly</div>
        <div class="nav__menu-phone__collections-item">Karacum</div>
        <div class="nav__menu-phone__collections-item">Magik</div>
        <div class="nav__menu-phone__collections-item">Carat</div>
        <div class="nav__menu-phone__collections-item">Plants</div>
      </div>

      <div
        class="nav__lang-container lang-collections__mob-pos"
        ref="navLangMob"
        @click="toggleLangContainerMob"
        :class="{
          'nav__lang-container-active': langContainerIsActiveMob,
          'lang__mob-pos': collectionActive,
        }"
      >
        <p>RU</p>
        <img
          :src="arrow"
          alt=""
          class="nav-arrow"
          :class="{ deg180: langContainerIsActiveMob }"
        />
        <div
          class="nav__lang-container_select lang-select__mob"
          :class="{
            'nav__lang-container_select-active': langContainerIsActiveMob,
          }"
        >
          <p>EN</p>
          <p>UZ</p>
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
    langContainerIsActive: false,
    langContainerIsActiveMob: false,
    mobMenuIsActive: false,
    collectionActive: false,
  }),
  methods: {
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
    closeLangMob(event) {
      if (!this.$refs.navLangMob.contains(event.target)) {
        this.langContainerIsActiveMob = false;
      }
    },
    toggleBasket() {
      this.$emit("toggle-basket");
    },

    toggleLangContainer() {
      this.langContainerIsActive = !this.langContainerIsActive;
    },

    toggleLangContainerMob() {
      this.langContainerIsActiveMob = !this.langContainerIsActiveMob;
    },

    toggleMobMenu() {
      this.mobMenuIsActive = !this.mobMenuIsActive;
    },
    toggleCollection() {
      this.collectionActive = !this.collectionActive;
    },
  },
  mounted() {
    window.addEventListener("click", this.closeDropdown);
    window.addEventListener("click", this.closeLang);
    window.addEventListener("click", this.closeLangMob);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeDropdown);
    window.removeEventListener("click", this.closeLang);
    window.removeEventListener("click", this.closeLangMob);
  },
};
</script>

<style></style>
