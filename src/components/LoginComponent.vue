<template>
  <section class="login__mob-container">
    <div class="login__container container">
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
        >
          <div class="regist__name-cont">
            <input type="text" name="name" id="name" placeholder=" " required />
            <label for="name">Ваше имя</label>
          </div>
          <div class="regist__tel-cont">
            <input type="tel" name="tel" id="tel" placeholder=" " required />
            <label for="tel">Номер телефона </label>
          </div>
          <div class="regist__email-cont">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
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
        >
          <div class="regist__email-cont">
            <input type="email" id="login_email" placeholder=" " required />
            <label for="login_email"> Email</label>
          </div>
          <div class="regist__password_1-cont">
            <input type="password" id="login_password" placeholder=" " required />
            <label for="login_password">Пароль</label>
          </div>

          <div class="regist__agreement-cont">
            <input id="remember" type="checkbox" required />
            <label for="remember">запомните меня</label>
          </div>

          <router-link to="/user" class="regist__btn-sub" type="submit">
            войти
          </router-link>
          <a class="regist__btn-recover-pas" href="">Забыли пароль?</a>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Мой аккаунт",
      isRegistrationSelected: false,
      isLoginSelected: true,
    };
  },
  methods: {
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
