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
            type="text"
            name=""
            id="nav_search"
            placeholder="Поиск..."
          />
          <button class="nav__search-btn" type="submit">искать</button>
        </div>

        <a @click="nav__login_auth()" class="nav__login-auth">
          <p>Регистрация /Авторизация</p>
        </a>
      </div>

      <!-- Вторая линия -->
      <div class="nav__second-line">
        <div class="nav__nav">
          <div id="collections" class="nav__nav-collections">
            <a
              id="collections_p"
              ref="navDropdown"
              @click="toggleMenu(), closeDropdown()"
              >{{ $t("collection") }}
              <img
                id="nav__nav_arrow"
                class="nav__nav-arrow"
                :src="arrow"
                :class="{ active_arrow: menuIsActive }"
                alt=""
            /></a>
          </div>
          <router-link class="nav__nav-about" to="/company">{{
            $t("aboutfactory")
          }}</router-link>
          <a class="nav__nav-Show" href="">{{ $t("Showroom") }}</a>
          <a class="nav__nav-new" @click="openNews()">{{ $t("news") }}</a>
          <a class="nav__nav-buy" href="">{{ $t("whereBuy") }}</a>
          <a class="nav__nav-cont" href="">{{ $t("contacts") }}</a>
        </div>

        <div
          id="nav_drop_menu"
          class="nav__drop-menu-container"
          :class="{ active: menuIsActive }"
        >
          <router-link
            class="menu-i"
            to="/product"
            style="text-transform: capitalize !important"
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
              <div
                class="nav__basket-any"
                v-for="(item, index) in cart"
                :key="index"
              >
                {{ cartItemCount }}
              </div>
              <img :src="bascket" alt="" />
            </div>
          </div>

          <div
            class="nav__lang-container"
            ref="navLang"
            @click="toggleLangContainer"
            :class="{ 'nav__lang-container-active': langContainerIsActive }"
          >
            <p>{{ languages[langIndex].name }}</p>
            <img
              :src="arrow"
              alt=""
              class="nav-arrow"
              :class="{ deg180: langContainerIsActive }"
            />

            <div
              v-if="langContainerIsActive"
              class="nav__lang-container_select"
              :class="{
                'nav__lang-container_select-active': langContainerIsActive,
              }"
            >
              <p
                v-for="(lang, index) in filteredLanguages"
                :key="lang.name"
                @click.stop="changeHandler(index, lang.value)"
              >
                {{ lang.name }}
              </p>
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
    langContainerIsActiveMob: false,
    mobMenuIsActive: false,
    collectionActive: false,
    langIndex: parseInt(localStorage.getItem("localeIndex")) || 0,
  }),
  computed: {
    ...mapGetters("collections", ["collections"]),
    ...mapGetters("cart", ["cart"]),

    cartItemCount() {
      // Calculate and return the total count of unique products in the cart
      return Object.keys(this.cart).length;
    },
    languages: () => [
      {
        name: "RU",
        value: "ru",
      },
      { name: "UZ", value: "uz" },
      { name: "EN", value: "en" },
    ],
    filteredLanguages() {
      // Return a filtered array that excludes the currently selected language
      return this.languages.filter((lang, index) => index !== this.langIndex);
    },
  },
  methods: {
    logMethod() {
      console.log(this.cart);
    },
    ...mapActions("collections", ["getCollections"]),
    ...mapActions("cart", ["getCart", "addCart", "deleteCart"]),

    nav__login_auth() {
      // Check if the user has a valid token in localStorage
      const token = localStorage.getItem("token");
      if (token) {
        // If the user has a token, route them to /user
        this.$router.push({ name: "user" });
      } else {
        // If there is no token, route them to /auth
        this.$router.push({ name: "auth" });
      }
    },
    changeHandler(index, value) {
      localStorage.setItem("locale", value);
      localStorage.setItem("localeIndex", index); // Store the selected language index
      this.$i18n.locale = value;
      this.langIndex = index;
      this.langContainerIsActive = false;
    },
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
    async openNews() {
      try {
        await this.$store.dispatch("news/getNews");
        const allNews = this.$store.getters["news/news"];
        allNews.sort((a, b) => new Date(b.created) - new Date(a.created));
        if (allNews.length > 0) {
          this.$router.push({ name: "news", params: { id: allNews[0].id } });
        } else {
          console.warn("No news found.");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
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
  async mounted() {
    window.addEventListener("click", this.closeDropdown);
    window.addEventListener("click", this.closeLang);
    window.addEventListener("click", this.closeLangMob);
    await this.getCollections();
    await this.getCart();
    this.logMethod();
  },

  beforeDestroy() {
    window.removeEventListener("click", this.closeDropdown);
    window.removeEventListener("click", this.closeLang);
    window.removeEventListener("click", this.closeLangMob);
  },
};
</script>

<style></style>
