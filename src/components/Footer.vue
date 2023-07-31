<template>
  <footer class="footer__container">
    <div class="footer__container-pos container">
      <a class="footer__logo-container" href="/main/main.html">
        <img :src="footerLogo" alt="" />
      </a>

      <div class="footer__body">
        <div class="footer__contacts">
          <div class="footer__tel-cont">
            <a class="footer__tel-1" href="tel:+998956026262">
              <img :src="footerTel" alt="" />
              <p>(95) 602 62 62</p>
            </a>

            <a class="footer__tel-2" href="tel:+998622266262">
              <img :src="footerTel" alt="" />
              <p>(62) 226 62 62</p>
            </a>
          </div>

          <div class="footer__address-1">
            220400 Республика Узбекистан,<br />
            Хорезмская обл., г. Питнак
          </div>

          <div class="footer__address-2">
            100007 Республика Узбекистан,<br />
            г. Ташкент, ул. Паркент 182
          </div>

          <div class="footer__social">
            <div class="footer__social-titel">Мы в социальных сетях</div>
            <div class="footer__social-cont-icon">
              <a class="footer__social-tg" href="">
                <img :src="footerTg" alt="" />
              </a>
              <a class="footer__social-fb" href="">
                <img :src="footerFb" alt="" />
              </a>
              <a class="footer__social-inst" href="">
                <img :src="footerInst" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div class="footer__links-cont">
          <div class="footer__links-collections">
            <p>Последние коллекции</p>
            <a href="">Clink</a>
            <a href="">Rahat</a>
            <a href="">Nuran</a>
            <a href="">Khiva</a>
            <a href="">Luma</a>
          </div>

          <div class="footer__links-hits">
            <p>Хиты</p>
            <a href="">Clink</a>
            <a href="">Rahat</a>
            <a href="">Nuran</a>
            <a href="">Khiva</a>
            <a href="">Luma</a>
          </div>

          <div class="footer__aoq">
            <a href="../about/about.html">О фабрике</a>
            <a href="">Шоурум</a>
            <a href="">Где купить?</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    footerLogo: require("@/assets/img/footer/footer__logo.svg"),
    footerTel: require("@/assets/img/footer/footer_tel-icon.svg"),
    footerTg: require("@/assets/img/footer/footer_tg.svg"),
    footerFb: require("@/assets/img/footer/footer_fb.svg"),
    footerInst: require("@/assets/img/footer/footer_inst.svg"),
  }),
};
</script>

<style>
</style>