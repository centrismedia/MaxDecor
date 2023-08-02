<template>
  <section class="login__container container">
    <div class="login__container-pos">
      <div class="login__title">{{ title }}</div>
      <div class="login__btn-select-form">
        <div
          class="login__btn-select_login"
          ref="loginBtnSelectLogin"
          @click="selectLogin"
        >
          Вход
        </div>
        <div
          class="login__btn-select_regist"
          ref="loginBtnSelectRegist"
          @click="selectRegistration"
        >
          Регистрация
        </div>
        <div
          class="login__btn-select_bgr"
          ref="loginBtnSelectBgr"
          :class="{
            login__btn_active: isLoginSelected || isRegistrationSelected,
          }"
        ></div>
      </div>

      <form
        id="regist_form"
        class="regist__container-form"
        :class="{ 'login_dis-none': isLoginSelected }"
        action=""
        @submit.prevent="submitRegister"
      >
        <div class="regist__name-cont">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            v-model="registerUsername"
            required
          />
          <label for="name">Ваше имя</label>
        </div>
        <div class="regist__tel-cont">
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder=" "
            v-model="registerNumber"
            required
          />
          <label for="tel">Номер телефона </label>
        </div>
        <div class="regist__email-cont">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            v-model="registerEmail"
          />
          <label for="email"> Email</label>
        </div>
        <div class="regist__password_1-cont">
          <input
            type="password"
            name="password_1"
            id="password_1"
            placeholder=" "
            required
            v-model="registerPassword1"
          />
          <label for="password_1">Пароль</label>
        </div>
        <div class="regist__password_2-cont">
          <input
            type="password"
            name="password_2"
            id="password_2"
            placeholder=" "
            required
            v-model="registerPassword2"
          />
          <label for="password_2"> Повторите пароль</label>
        </div>

        <div class="regist__agreement-cont">
          <input type="checkbox" name="agreement" id="agreement" required />
          <label for="agreement"
            >Я согласен с «Условиями пользовательского соглашения»</label
          >
        </div>

        <button class="regist__btn-sub" type="submit">
          зарегистрироваться
        </button>
      </form>

      <form
        id="login_form"
        class="regist__container-form"
        :class="{ 'login_dis-none': isRegistrationSelected }"
        action=""
        @submit.prevent="submitLogin"
        method="post"
      >
        <div class="regist__email-cont">
          <input
            id="login_email"
            type="text"
            placeholder=" "
            v-model="username"
            required
          />
          <label for="login_email"> Email</label>
        </div>
        <div class="regist__password_1-cont">
          <input
            id="login_password"
            type="password"
            placeholder=" "
            v-model="password"
            required
          />
          <label for="login_password">Пароль</label>
        </div>

        <div class="regist__agreement-cont">
          <input id="remember" type="checkbox" />
          <label for="remember">запомните меня</label>
        </div>

        <button @click="submitLogin()" class="regist__btn-sub" type="submit">
          войти
        </button>
        <a class="regist__btn-recover-pas" href="">Забыли пароль?</a>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Мой аккаунт",
      isRegistrationSelected: false,
      isLoginSelected: true,
      username: "",
      password: "",
      registerUsername: "",
      registerNumber: "",
      registerEmail: "",
      registerPassword1: "",
      registerPassword2: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["loginError"]),
  },
  methods: {
    submitRegister(e) {
      const formData = {
        username: this.registerUsername,
        first_name: this.registerUsername,
        last_name: this.registerUsername,
        phone_number: this.registerNumber,
        email: this.registerEmail,
        password1: this.registerPassword1,
        password2: this.registerPassword2,
      };
      axios
        .post("/users/register/", formData)
        .then((response) => {
          console.log(response);
          const token = response.data.access;
          this.$store.commit("setToken", token);
          axios.defaults.headers.common["Authorization"] = "Token" + token;
          localStorage.setItem("token", token);
          this.$router.push("/user");
        })
        .catch((error) => {
          console.log(error);
          this.username = "";
          this.password = "";
        });
    },
    async submitLogin(e) {
      const formData = { username: this.username, password: this.password };
      axios
        .post("/token/", formData)
        .then((response) => {
          console.log(response);
          const token = response.data.access;
          this.$store.commit("setToken", token);
          axios.defaults.headers.common["Authorization"] = "Token" + token;
          localStorage.setItem("token", token);
          this.$router.push("/user");
        })
        .catch((error) => {
          console.log(error);
          this.username = "";
          this.password = "";
        });
    },
    suibmitRegistration() {},

    selectLogin() {
      const loginBtnSelectBgr = this.$refs.loginBtnSelectBgr;

      if (!loginBtnSelectBgr.classList.contains("login__btn_active")) {
        loginBtnSelectBgr.classList.toggle("login__btn_active");
        this.isLoginSelected = true;
        this.isRegistrationSelected = false;
        setTimeout(() => {
          this.title = "мой аккаунт";
        }, 200);
      } else {
        loginBtnSelectBgr.classList.add("shake_btn-acive");
        setTimeout(() => {
          loginBtnSelectBgr.classList.remove("shake_btn-acive");
        }, 400);
      }
    },
    selectRegistration() {
      const loginBtnSelectBgr = this.$refs.loginBtnSelectBgr;

      if (loginBtnSelectBgr.classList.contains("login__btn_active")) {
        loginBtnSelectBgr.classList.toggle("login__btn_active");
        this.isRegistrationSelected = true;
        this.isLoginSelected = false;
        setTimeout(() => {
          this.title = "создать аккаунт";
        }, 200);
      } else {
        loginBtnSelectBgr.classList.add("shake_btn");
        setTimeout(() => {
          loginBtnSelectBgr.classList.remove("shake_btn");
        }, 400);
      }
    },
  },
};
</script>

<style>
/* Add any necessary styles for the component here */
</style>
