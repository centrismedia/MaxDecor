<template>
  <div>
    <section class="about__body container">
      <p>
        Мы — фабрика New Best Style (торговая марка Max Decor). Производим
        виниловые обои по китайской технологии лидеров-производителей «Kapros
        Group» и фабрики «Yien». Свою работу мы начали в декабре 2019 года и, на
        сегодняшний день, пользуемся горячим спросом не только в Узбекистане, но
        и за его пределами. <br />
        Наша фабрика располагается в Хорезмской области, в городе Питнак, на
        территории Свободной экономической зоны Хазарасп. Увидеть нашу продукцию
        в городе Ташкент можно по адресу: улица Паркентская 182, ориентир:
        бывшая корзинка Авиатор.
      </p>
      <p>
        Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis
        facilisis ligula felis et a parturient aenean. Ac maecenas ultricies
        felis risus scelerisque duis posuere. Lectus tellus montes, ac sed diam.
        Habitant amet, leo cras dui ac eu magna. <br />
        Sed neque lorem mi laoreet orci aliquam maecenas. Molestie enim, nulla
        egestas id metus quisque eget. Tempor ante hendrerit venenatis et
        pellentesque viverra. Ornare mattis dui viverra suspendisse habitant
      </p>
    </section>

    <!-- Карта -->

    <section class="map__container container">
      <div class="map__title">Карта сотрудничества</div>

      <div class="map__body">
        <img class="map-world" :src="map" alt="" />

        <div class="uz__container">
          <div class="uz__title">
            <p class="uz__title_name">MaxDecor</p>
            <p class="uz__title_body">Uzbekistan</p>
          </div>
          <img class="uz__main-dot" :src="mainDot" alt="" />
        </div>

        <div class="ru__container">
          <p class="ru__name">Россия</p>
          <img class="ru__main-dot" :src="smallDot" alt="" />
        </div>

        <div class="kz__container">
          <img class="kz__main-dot" :src="smallDot" alt="" />
          <p class="kz__name">Казахстан</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    map: require("@/assets/img/company/map-world.png"),
    mainDot: require("@/assets/img/company/main-dot.svg"),
    smallDot: require("@/assets/img/company/small-dot.svg"),
  }),
};
</script>

<style>
</style>