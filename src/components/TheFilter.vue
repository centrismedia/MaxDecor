<template>
  <section class="filter__container container">
    <!-- Кнопка фильтра -->
    <div class="filter__btn" @click="toggleFilter">
      <div class="filter__btn__icon">
        <div class="btn_top-line">
          <div
            class="btn_top-circle"
            :class="{ 'filter__btn-active-top': isActiveTopCircle }"
          ></div>
        </div>
        <div class="btn_bot-line">
          <div
            class="btn_bot-circle"
            :class="{ 'filter__btn-active-bot': isActiveBotCircle }"
          ></div>
        </div>
      </div>
      <div class="filter__btn__txt">{{ $t("filter") }}</div>
    </div>

    <!-- Таблица фильтра -->
    <div
      class="table-filter__container"
      :style="{ maxHeight: tableFilterMaxHeight }"
    >
      <div class="table-filter__column-pos">
        <div class="table-filter__column">
          <p class="table-filter__title">{{ $t("destination") }}</p>
          <div
            class="table-filter__element"
            v-for="item in rooms"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" class="check-mark" alt="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="table-filter__column">
          <p class="table-filter__title">{{ $t("style") }}</p>
          <div
            class="table-filter__element"
            v-for="item in styles"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" class="check-mark" alt="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="table-filter__column">
          <p class="table-filter__title">{{ $t("picture") }}</p>
          <div
            class="table-filter__element"
            v-for="item in pictureTypes"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" class="check-mark" alt="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="table-filter__column">
          <p class="table-filter__title">{{ $t("size") }}</p>
          <div
            class="table-filter__element"
            v-for="item in sizes"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" class="check-mark" alt=""  />
            </div>
            <p>{{ item.width }} x {{ item.height }}</p>
          </div>
        </div>

        <!-- Add other table-filter__column elements here -->

        <div class="table-filter__color-container" ref="tableFilterContainer">
          <p class="table-filter__title">{{ $t("color") }}</p>
          <div class="table-filter__color_row">
            <div
              class="table-filter__color-active"
              v-for="row in colors"
              :key="row.id"
            >
              <div
                class="table-filter__color"
                :style="{ background: row.hexa_value }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-filter__search-btn">Подобрать</div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatHexColor } from "@/use/prettify";
export default {
  data() {
    return {
      formatHexColor,
      isActiveTopCircle: false,
      isActiveBotCircle: false,
      tableFilterMaxHeight: "0px",
      destinations: ["Гостиная", "Спальня", "Прихожая", "Кухня", "Детская"],

      checkMark: require("@/assets/img/Filter/check-mark.svg"),
    };
  },
  computed: {
    ...mapGetters("filter", [
      "rooms",
      "colors",
      "pictureTypes",
      "styles",
      "sizes",
    ]),
   
  },
  methods: {
    ...mapActions("filter", [
      "getRooms",
      "getStyles",
      "getPictureTypes",
      "getSizes",
      "getColors",
    ]),
    logMethod() {
      console.log(this.rooms);
      console.log(this.colors);
      console.log(this.pictureTypes);
      console.log(this.styles);
      console.log(this.sizes);
    },
    toggleFilter() {
      this.isActiveTopCircle = !this.isActiveTopCircle;
      this.isActiveBotCircle = !this.isActiveBotCircle;

      if (this.isActiveTopCircle) {
        this.tableFilterMaxHeight = `${this.$refs.tableFilterContainer.scrollHeight}px`;
      } else {
        this.tableFilterMaxHeight = "0px";
      }
    },
  },
  async mounted() {
    this.getRooms(),
      this.getStyles(),
      this.getPictureTypes(),
      this.getSizes(),
      this.getColors();
    this.logMethod();
  },
};
</script>
