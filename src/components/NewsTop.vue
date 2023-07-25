<template>
  <div>
    <div class="news__title-container container">
      <p class="news__title">
        Bedroom Design is the Most Personal
        Reflection of the Owner, Really?
      </p>
      <p class="news__title_descr">
        Is it true that the bedroom design is the most personal reflection of
        the owner? Many people believe
        that to be able to judge a person's
        personality, it is enough to
      </p>
    </div>

    <!-- Свайпер -->

    <div class="swiper mySwiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
          <img :src="slide.img" alt="" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

    <section class="news__body container">
        <div class="news__body-title">
            <p class="news__body-title_date">23 June 2023</p>
            <p class="news__body-title_name">Поздравляем победителей выставки 2023</p>
        </div>

        <div class="news__body-copy">
            <p> <span>Faucibus facilisi morbi pharetra quis sed.</span> Vitae suspendisse facilisis facilisis ligula felis et a
                parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere. Lectus tellus montes, ac
                sed diam. Habitant amet, leo cras dui ac eu magna.
                Sed neque lorem mi laoreet orci aliquam maecenas. Molestie enim, nulla egestas id metus quisque eget.
                Tempor ante hendrerit venenatis et pellentesque viverra. Ornare mattis dui viverra suspendisse habitant
                tempus ornare aliquam. Condimentum tellus cursus diam interdum. Quam dictum pellentesque vestibulum mi.
                Aliquet laoreet sem proin viverra nec, at. Malesuada aliquam quisque felis, faucibus. Diam duis nunc
                tincidunt integer risus sit parturient urna. Etiam sed id nisi, tempus fames. Tempor ultrices massa
                eleifend id aliquet integer. Phasellus felis convallis fames habitasse sagittis, dui tellus.</p>
            <p>Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a
                parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere. Lectus tellus montes, ac
                sed diam. Habitant amet, leo cras dui ac eu magna.
                Sed neque lorem mi laoreet orci aliquam maecenas. Molestie enim, nulla egestas id metus quisque eget.
                Tempor ante hendrerit venenatis et pellentesque viverra. Ornare mattis dui viverra suspendisse habitant
            </p>
        </div>

    </section>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  data: () => ({
    slides: [
      {
        img: require("@/assets/img/newSlider/news-slider.png"),
      },
      {
        img: require("@/assets/img/newSlider/swiper_photo_2.png"),
      },
      {
        img: require("@/assets/img/newSlider/swiper_photo_1.png"),
      },
    ],
  }),
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      /*    scrollbar: {
        el: ".swiper-scrollbar",
      }, */
    });
  },
  methods: {
    onWindowResize() {
      if (this.swiper) {
        this.swiper.destroy();
        this.initSwiper();
      }
    },
  },
};
</script>

<style>
</style>