function init() {
  const nav = document.querySelector(".header-nav");

  window.addEventListener("scroll", stickyNavigation);

  function stickyNavigation() {
    if (window.pageYOffset > 240) {
      nav.classList.add("header-nav--fixed");
    } else {
      nav.classList.remove("header-nav--fixed");
    }
  }

  document.querySelector(".social__nav").addEventListener("mouseenter", () => {
    console.log("hola");
  });

  document.querySelector(".social__nav").addEventListener("mouseleave", () => {
    console.log("adios");
  });
}

window.onload = init;
