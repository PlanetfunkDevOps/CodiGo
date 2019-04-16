function init() {
  const bodyBg = document.querySelector(".body-bg");
  const wrapper = document.querySelector(".wrapper");
  const article = document.querySelectorAll(".article");
  const menuSub = document.querySelector(".menu-sub");
  const menuBtn = document.querySelector(".menu-btn");
  const menuBtnLine = document.querySelector(".menu-btn-line");
  const menuContent = document.querySelector(".menu-content");
  const menuInfo = document.querySelector(".menu-info");

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);
  article.forEach(item => item.addEventListener("click", toggleMenu));

  function toggleMenu() {
    if (!showMenu) {
      bodyBg.classList.add("show");
      wrapper.classList.add("show");
      menuSub.classList.add("show");
      menuBtn.classList.add("show");
      menuBtnLine.classList.add("show");
      menuContent.classList.add("show");
      menuInfo.classList.add("show");

      showMenu = true;
    } else {
      bodyBg.classList.remove("show");
      wrapper.classList.remove("show");
      menuSub.classList.remove("show");
      menuBtn.classList.remove("show");
      menuBtnLine.classList.remove("show");
      menuContent.classList.remove("show");
      menuInfo.classList.remove("show");

      showMenu = false;
    }
  }
}

window.onload = init;
