/* Getting elements from Dom > Header-outer */
const headerOuter = document.querySelector(".header-outer");
const navOuter = document.querySelector(".outer-nav");
const outerList = document.querySelector(".outer-nav__list");
const outerItem = document.querySelectorAll(".outer-nav__item");
const mainHeader = document.getElementById("main-header");

/* Set state of social nnavbar */
let showSocial = false;

/* Getting element and setting eventlistener */
const menuSocial = document.querySelector(".social-btn");
menuSocial.addEventListener("click", toggleSocial);

/* Toggle social navbar function */
function toggleSocial() {
  /* Checking if social navbar is active */
  if (!showSocial) {
    mainHeader.style.height = 140 + "px";
    headerOuter.classList.add("show");
    navOuter.classList.add("show");
    outerList.classList.add("show");
    outerItem.forEach(item => item.classList.add("show"));

    /* Changing the initial state of social navbar */
    showSocial = true;
  } else {
    mainHeader.style.height = 100 + "px";
    headerOuter.classList.remove("show");
    navOuter.classList.remove("show");
    outerList.classList.remove("show");
    outerItem.forEach(item => item.classList.remove("show"));

    showSocial = false;
  }
}

/* Getting main navbar classes to show/hide both main nav or search nav*/
const mainNav = document.querySelector(".main-nav");
const navLogo = document.querySelector(".logo");
const navList = document.querySelector(".main-nav__list");
const navItem = document.querySelector(".main-nav__item");
const socialNav = document.querySelector(".social-nav");

/* Search navbar classes */
const searchWrapper = document.querySelector(".social-search__wrapper");
const searchInput = document.querySelector(".social-search__input");
const socialBtnItem = document.querySelectorAll(".search-btn__line");

/* Setting initial state of search bar */
let showSearch = false;

/* Event classes */
const searchBtn = document.querySelector(".social-search__icon");
const socialBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", toggleSearch);
socialBtn.addEventListener("click", toggleSearch);

function toggleSearch() {
  /* Checking initial state of search navbar */
  if (!showSearch) {
    /* Hide main navbar */
    mainNav.classList.add("hide");
    navLogo.classList.add("hide");
    navList.classList.add("hide");
    navItem.classList.add("hide");
    socialNav.classList.add("hide");
    searchBtn.classList.add("hide");

    /* Show search bar */
    searchWrapper.classList.add("show");
    searchInput.classList.add("show");
    searchInput.value = "";
    socialBtn.classList.add("show");
    socialBtnItem.forEach(item => item.classList.add("show"));

    /* Change state of navbar */
    showSearch = true;
  } else {
    /* Show main navbar */
    mainNav.classList.remove("hide");
    navLogo.classList.remove("hide");
    navList.classList.remove("hide");
    navItem.classList.remove("hide");
    socialNav.classList.remove("hide");
    searchBtn.classList.remove("hide");

    /* Hide search bar */
    searchWrapper.classList.remove("show");
    searchInput.classList.remove("show");
    searchInput.value = "";
    socialBtn.classList.remove("show");
    socialBtnItem.forEach(item => item.classList.remove("show"));

    showSearch = false;
  }
}

/* Burger menu show/hide */
const burgerMenu = document.querySelector('.burger-menu');

let showMenu = false;

burgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    burgerMenu.classList.add('close');
    showMenu = true;
  } else {
    burgerMenu.classList.remove('close');
    showMenu = false;
  }
}
