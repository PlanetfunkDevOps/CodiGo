const social = document.querySelector(".nav-social");
const search = document.querySelector(".nav-search");
const headerInner = document.querySelector(".header-inner");

let showSocial = false;
let showSearch = false;

const menuSocial = document.querySelector(".toggle-social");
menuSocial.addEventListener("click", toggleSocial);


function toggleSocial() {
  if (!showSocial) {
    social.classList.add("show");

    showSocial = true;
  } else {
    social.classList.remove("show");

    showSocial = false;
  }
}

const menuSearch = document.querySelector(".toggle-search");
const menuClose = document.querySelector('.menu-close');
menuSearch.addEventListener("click", toggleSearch);
menuClose.addEventListener("click", toggleSearch);

function toggleSearch() {
  if (!showSearch) {
    headerInner.classList.add("hide");
    search.classList.add("show");

    showSearch = true;
  } else {
    headerInner.classList.remove("hide");
    search.classList.remove("show");

    showSearch = false;
  }
}

const burguer = document.querySelector(".burguer-menu");
const navItem = document.querySelectorAll('.main-nav__item');

let showBurguer = false;

burguer.addEventListener("click", toggleBurguer);

function toggleBurguer() {
  if (!showBurguer) {
    burguer.classList.add("close");
    navItem.forEach(item => item.classList.add("show"));

    showBurguer = true;
  } else {
    burguer.classList.remove("close");
    navItem.forEach(item => item.classList.remove("show"));

    showBurguer = false;
  }
}
