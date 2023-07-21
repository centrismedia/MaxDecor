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
          <p class="table-filter__title">Назначение</p>
          <div
            class="table-filter__element"
            v-for="item in destinations"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" alt="" />
            </div>
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="table-filter__column">
          <p class="table-filter__title">Стиль</p>
          <div
            class="table-filter__element"
            v-for="item in style"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" alt="" />
            </div>
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="table-filter__column">
          <p class="table-filter__title">Рисунок</p>
          <div
            class="table-filter__element"
            v-for="item in picture"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" alt="" />
            </div>
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="table-filter__column">
          <p class="table-filter__title">Размер</p>
          <div
            class="table-filter__element"
            v-for="item in sizes"
            :key="item.id"
          >
            <div class="table-filter__marker">
              <img :src="checkMark" alt="" />
            </div>
            <p>{{ item }}</p>
          </div>
        </div>

        <!-- Add other table-filter__column elements here -->

        <div class="table-filter__color-container">
          <p class="table-filter__title">Цвет</p>
          <div
            class="table-filter__color_row"
            v-for="row in colors"
            :key="row.id"
          >
            <div
              class="table-filter__color-active"
              v-for="color in row"
              :key="color.id"
            >
              <div :class="color"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-filter__search-btn">Подобрать</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActiveTopCircle: false,
      isActiveBotCircle: false,
      tableFilterMaxHeight: "0px",
      destinations: ["Гостиная", "Спальня", "Прихожая", "Кухня", "Детская"],
      style: ["Классика", "Флористика", "Орнамент", "Геометрия", "Детский"],
      picture: ["Природа", "Фоновый", "Подкраска"],
      sizes: ["0,53 x 10", "1,06 x 10", "1.06 x 25"],

      // Add other data properties here
      colors: [
        [
          "table-filter__color-1",
          "table-filter__color-2",
          "table-filter__color-3",
        ],
        [
          "table-filter__color-4",
          "table-filter__color-5",
          "table-filter__color-6",
        ],
        [
          "table-filter__color-7",
          "table-filter__color-8",
          "table-filter__color-9",
        ],
        [
          "table-filter__color-10",
          "table-filter__color-11",
          "table-filter__color-12",
        ],
      ],
      checkMark: require("@/assets/img/Filter/check-mark.svg"),
    };
  },

  methods: {
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
};
</script>