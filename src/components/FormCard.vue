<template>
  <section class="form__container-bg">
    <div class="form__container-pos container">
      <div class="form__title">Оставить заявку</div>

      <form class="form__container" action="" @submit.prevent="submitHandler()">
        <div class="form__name-cont">
          <label for="name">Ваше имя*</label>
          <input type="text" name="name" id="name" required v-model="name" />
        </div>

        <div class="form__tel-cont">
          <label for="tel">Номер телефона*</label>
          <input
            type="tel"
            name="name"
            id="tel"
            required
            v-model="phoneNumber"
          />
        </div>
        <div class="form__email-cont">
          <label for="email">Email</label>
          <input
            type="email"
            name="name"
            id="email"
            autocomplete="on"
            v-model="email"
          />
        </div>

        <button type="submit" class="form__btn-subm">Отправить</button>
      </form>

      <div class="form__img-decor">
        <img :src="boxShadow" alt="" />
        <div class="form__descritor">
          *Поля обозначенные звёздочкой,<br />
          обязательны для заполнения.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    boxShadow: require("@/assets/img/formCard/card__shadow.png"),
    name: "",
    phoneNumber: "",
    email: "",
  }),
  computed: {
    ...mapGetters("inquiry", ["inquiry"]),
  },
  methods: {
    ...mapActions("inquiry", ["addInquiry"]),
    submitHandler() {
      const formData = {
        full_name: this.name,
        phone_number: this.phoneNumber,
        email: this.email,
      };
      const jsonFormData = JSON.stringify(formData);

      // Send the POST request using Axios with proper headers
      axios
        .post("/inquiries/inquiry/", jsonFormData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // Handle the response if needed
          // Reset form fields after successful form submission
          this.name = "";
          this.phoneNumber = "";
          this.email = "";

          alert("Inquiry submitted successfully!");
        })
        .catch((error) => {
          // Handle error if needed
          console.log(jsonFormData);

          alert("Error submitting inquiry: " + error.message);
        });
    },
  },
};
</script>

<style>
</style>