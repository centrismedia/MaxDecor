<template>
  <section class="personalArea__table-order">
    <!-- Header таблицы -->
    <div class="personalArea__table-header">
      <div class="table-header_order">заказаз</div>
      <div class="table-header_date">дата</div>
      <div class="table-header_quantity">Колличество</div>
      <div class="table-header_price">ЦЕНА</div>
      <div class="table-header_status">СТАТУС ЗАКАЗА</div>
    </div>

    <!-- Body таблицы -->
    <div class="personalArea__table-body">
      <div class="table-body__row">
        <div class="table-body__content">
          <div class="table-body_order">Коллекция Bricly</div>
          <div class="table-body_date">October 8,2021</div>
          <div class="table-body_quantity">4</div>
          <div class="table-body_price">$ 105</div>
          <div class="table-body_status">Доставленно</div>
        </div>
        <div class="table-body_under-line"></div>
      </div>

      <div class="table-body__row">
        <div class="table-body__content">
          <div class="table-body_order">Коллекция Bricly</div>
          <div class="table-body_date">October 8,2021</div>
          <div class="table-body_quantity">5</div>
          <div class="table-body_price">$ 100</div>
          <div class="table-body_status">В процессе</div>
        </div>
        <div class="table-body_under-line"></div>
      </div>

      <div class="table-body__row">
        <div class="table-body__content">
          <div class="table-body_order">Коллекция Bricly</div>
          <div class="table-body_date">October 8,2021</div>
          <div class="table-body_quantity">8</div>
          <div class="table-body_price">$ 65</div>
          <div class="table-body_status">В процессе</div>
        </div>
        <div class="table-body_under-line"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("orders", ["orders"]),
  },
  methods: {
    ...mapActions("orders", ["getOrders"]),
    logMethod() {
      console.log(this.orders);
    },
  },
  mounted() {
    this.getOrders();
    this.logMethod();
  },
};
</script>

<style>
</style>