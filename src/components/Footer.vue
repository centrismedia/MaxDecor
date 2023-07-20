<template>
  <footer class="footer__container">
    <div class="footer__container-pos container">
      <a class="footer__logo-container" href="/main/main.html">
        <img :src="footerLogo" alt="" />
      </a>

      <div class="footer__body">
        <div class="footer__contacts">
          <div class="footer__tel-cont" v-for="tel in phone" :key="tel.id">
            <a class="footer__tel-2" :href="`tel:+998${tel.phone_number}`">
              <img :src="footerTel" alt="" />
              <p>{{ prettify(tel.phone_number) }}</p>
            </a>
          </div>

          <div
            class="footer__address-1"
            v-for="location in addresses"
            :key="location.id"
            @click="logMethod"
          >
            {{ location.region }},<br />
            {{ location.district }} {{ location.street }}
            {{ location.house_no }}
          </div>

          <div class="footer__social">
            <div class="footer__social-titel">Мы в социальных сетях</div>
            <div class="footer__social-cont-icon">
              <a
                v-for="link in combinedLinks"
                :class="link.class"
                :href="link.site"
                :key="link.id"
              >
                <img :src="link.img" alt="" />
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
import { mapActions, mapGetters } from "vuex";
import { prettify } from "@/use/prettify";
export default {
  data: () => ({
    footerLogo: require("@/assets/img/footer/footer__logo.svg"),
    footerTel: require("@/assets/img/footer/footer_tel-icon.svg"),
    prettify,
    socialsImg: [
      {
        img: require("@/assets/img/footer/footer_tg.svg"),
        class: "footer__social-tg",
        verifyLink: "tg",
      },
      {
        img: require("@/assets/img/footer/footer_fb.svg"),
        class: "footer__social-fb",
        verifyLink: "fb",
      },
      {
        img: require("@/assets/img/footer/footer_inst.svg"),
        class: "footer__social-inst",
        verifyLink: "ig",
      },
    ],
  }),
  computed: {
    ...mapGetters("phone", ["phone"]),
    ...mapGetters("social", ["social"]),
    ...mapGetters("addresses", ["addresses"]),
    combinedLinks() {
      const combined = [];

      for (let i = 0; i < this.social.length; i++) {
        const socialMedia = this.social[i].social_media;
        const matchingSocialImg = this.socialsImg.find(
          (imgObj) => imgObj.verifyLink === socialMedia
        );

        if (matchingSocialImg) {
          combined.push({
            link: this.social[i][socialMedia],
            site: this.social[i].link, // Assuming that the social object has properties like 'tg', 'fb', and 'ig'.
            img: matchingSocialImg.img,
            class: matchingSocialImg.class,
          });
        }
      }
      return combined;
    },
  },
  methods: {
    ...mapActions("phone", ["getPhone"]),
    ...mapActions("social", ["getSocial"]),
    ...mapActions("addresses", ["getAddresses"]),
    logMethod() {
      console.log(this.social);
    },
    handleCall(phone) {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // If it's a mobile device, try to initiate the call
        window.location.href = `tel:+998${phone}`;
      } else {
        // If it's not a mobile device, show a message or provide alternative contact options
        alert(`To call, please dial: +998${phone}`);
        // Or provide an alternative contact option like an email address or a contact form
      }
    },
  },
  async mounted() {
    await this.getPhone();
    await this.getSocial();
    await this.getAddresses();
  },
};
</script>

<style>
</style>