<template>
  <section class="form__container-bg">
    <div class="form__container-pos container">
      <div class="form__title">Оставить заявку</div>

      <form class="form__container" action="">
        <div class="form__name-cont">
          <label for="name">Ваше имя*</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div class="form__tel-cont">
          <label for="tel">Номер телефона*</label>
          <input type="tel" name="name" id="tel" required />
        </div>
        <div class="form__email-cont">
          <label for="email">Email</label>
          <input type="email" name="name" id="email" autocomplete="on" />
        </div>

        <button class="form__btn-subm" type="submit">Отправить</button>
      </form>

      <div class="form__img-decor">
        <img :src="boxShadow" alt="" />
        <div class="form__descritor">
          *Поля обозначенные звёздочкой,
          обязательны для заполнения.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    boxShadow: require("@/assets/img/formCard/card__shadow.png"),
  }),
};
</script>

<style>
</style>