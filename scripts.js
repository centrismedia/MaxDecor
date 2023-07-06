"use srict";

// Выпадающее меню
const collections = document.querySelector("#collections");
const collections_p = document.querySelector("#collections_p");
const header_drop_menu = document.querySelector("#header_drop_menu");
const header__nav_arrow = document.querySelector("#header__nav_arrow");


// Закрытие выпадающего меню
const toggleMenu = function () {
  header_drop_menu.classList.toggle("active");
  header__nav_arrow.classList.toggle("active_arrow");
  collections_p.classList.toggle("active_a");
}


collections.addEventListener("click", function (e) {
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == header_drop_menu || header_drop_menu.contains(target);
  const its_btnMenu = target == collections;
  const its_btnMenu_p = target == collections_p;
  const its_btnMenu_img = target == header__nav_arrow;
  const menu_is_active = header_drop_menu.classList.contains("active");

  if (!its_menu && !its_btnMenu && !its_btnMenu_p && !its_btnMenu_img && menu_is_active) {
      toggleMenu();
  }
});





// Свайпер
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Анимация иконки фильтра

const btn_top_circle = document.querySelector(".btn_top-circle");
const btn_bot_circle = document.querySelector(".btn_bot-circle");

const filter__btn = document.querySelector(".filter__btn");


filter__btn.addEventListener("click", function (e) {
  btn_top_circle.classList.toggle("filter__btn-active-top");
  btn_bot_circle.classList.toggle("filter__btn-active-bot");
});