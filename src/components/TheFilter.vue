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
      <div class="filter__btn__txt">FILTER</div>
    </div>

    <!-- Таблица фильтра -->
    <div
      class="table-filter__container"
      :class="{ 'table-filter__visible': isActiveTopCircle }"
      :style="{ maxHeight: tableFilterMaxHeight }"
      ref="tableFilterContainer"
    >
      <div class="reset-filter">СБРОСИТЬ ВСЁ</div>
      <div class="table-filter__column-pos">
        <div class="table-filter__column">
          <p class="table-filter__title">{{ $t("destination") }}</p>
          <div
            class="table-filter__element"
            v-for="item in rooms"
            :key="item.id"
            @click="toggleMarkActive('destination', item.id)"
          >
            <div class="table-filter__marker">
              <img
                :src="checkMark"
                class="check-mark"
                alt=""
                :class="{ active: isActiveMarkActive('destination', item.id) }"
              />
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
            @click="toggleMarkActive('style', item.id)"
          >
            <div class="table-filter__marker">
              <img
                :src="checkMark"
                class="check-mark"
                alt=""
                :class="{ active: isActiveMarkActive('style', item.id) }"
              />
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
            @click="toggleMarkActive('pictures', item.id)"
          >
            <div class="table-filter__marker">
              <img
                :src="checkMark"
                class="check-mark"
                :class="{ active: isActiveMarkActive('pictures', item.id) }"
                alt=""
              />
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
            @click="toggleMarkActive('sizes', item.id)"
          >
            <div class="table-filter__marker">
              <img
                :src="checkMark"
                class="check-mark"
                :class="{ active: isActiveMarkActive('sizes', item.id) }"
                alt=""
              />
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
              @click="toggleColorActive(row.id)"
              :class="{ active: activeColors.includes(row.id) }"
            >
              <div
                class="table-filter__color"
                :style="{ background: row.hexa_value }"
                :class="{ active: activeColors.includes(row.id) }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-filter__search-btn" @click="applyFilter()">
        Подобрать
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatHexColor } from "@/use/prettify";
import Hammer from "hammerjs"; // Step 1: Import Hammer.jsF
export default {
  data() {
    return {
      formatHexColor,
      isActiveTopCircle: false,
      isActiveBotCircle: false,
      tableFilterMaxHeight: "0px",
      activeColors: [],
      checkMark: require("@/assets/img/Filter/check-mark.svg"),
      activeMarksDestination: [],
      activeMarksStyle: [],
      activeMarksPictures: [],
      activeMarksSizes: [],
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
    applyFilter() {
      // Gather the selected filter options
      const filterOptions = {
        destination: this.activeMarksDestination,
        style: this.activeMarksStyle,
        pictures: this.activeMarksPictures,
        sizes: this.activeMarksSizes,
        colors: this.activeColors,
      };

      // Dispatch the action to apply the filter
      this.applyFilter(filterOptions);
    },
    logMethod() {
      console.log(this.rooms);
      console.log(this.colors);
      console.log(this.pictureTypes);
      console.log(this.styles);
      console.log(this.sizes);
    },
    toggleColorActive(colorId) {
      if (this.activeColors.includes(colorId)) {
        // Если элемент уже активен, удаляем его из массива
        this.activeColors = this.activeColors.filter((id) => id !== colorId);
      } else {
        // Если элемент не активен, добавляем его в массив
        this.activeColors.push(colorId);
      }
    },
    toggleMarkActive(column, markId) {
      // В зависимости от значения column выбираем соответствующий массив
      let activeMarksArray = null;
      if (column === "destination") {
        activeMarksArray = this.activeMarksDestination;
      } else if (column === "style") {
        activeMarksArray = this.activeMarksStyle;
      } else if (column === "pictures") {
        activeMarksArray = this.activeMarksPictures;
      } else if (column === "sizes") {
        activeMarksArray = this.activeMarksSizes;
      }
      // Аналогично добавьте ветви для остальных столбцов

      if (activeMarksArray) {
        if (activeMarksArray.includes(markId)) {
          // Если элемент уже активен, удаляем его из массива
          activeMarksArray = activeMarksArray.filter((id) => id !== markId);
        } else {
          // Если элемент не активен, добавляем его в массив
          activeMarksArray.push(markId);
        }
      }

      // Обновляем соответствующий массив активных элементов после изменений
      if (column === "destination") {
        this.activeMarksDestination = activeMarksArray;
      } else if (column === "style") {
        this.activeMarksStyle = activeMarksArray;
      } else if (column === "pictures") {
        this.activeMarksPictures = activeMarksArray;
      } else if (column === "sizes") {
        this.activeMarksSizes = activeMarksArray;
      }
      // Аналогично добавьте ветви для остальных столбцов
    },
    handleSwipeLeft(event) {
      this.isActiveTopCircle = false;
      this.isActiveBotCircle = false;
      this.tableFilterMaxHeight = "0px";
    },
    // Добавьте метод isActiveMarkActive() для определения активности элемента
    isActiveMarkActive(column, markId) {
      let activeMarksArray = null;
      if (column === "destination") {
        activeMarksArray = this.activeMarksDestination;
      } else if (column === "style") {
        activeMarksArray = this.activeMarksStyle;
      } else if (column === "pictures") {
        activeMarksArray = this.activeMarksPictures;
      } else if (column === "sizes") {
        activeMarksArray = this.activeMarksSizes;
      }
      // Аналогично добавьте ветви для остальных столбцов

      return activeMarksArray ? activeMarksArray.includes(markId) : false;
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
    const tableFilterContainer = this.$refs.tableFilterContainer;
    const mc = new Hammer.Manager(tableFilterContainer);
    mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_LEFT }));

    // Step 3: Listen for the swipeleft event and call the handleSwipeLeft method
    mc.on("swipeleft", this.handleSwipeLeft);
    this.getRooms(),
      this.getStyles(),
      this.getPictureTypes(),
      this.getSizes(),
      this.getColors();
    this.logMethod();
  },
};
</script>
<style lang="scss" scoped>
.check-mark {
  transition: opacity 0.3s ease;

  opacity: 0;
  z-index: 1;
}

.check-mark.active {
  opacity: 1;
}
</style>
