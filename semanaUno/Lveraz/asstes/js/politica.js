const rightArrow = document.querySelector(".scroll-right");
const sectionLinks = document.getElementById("section-links");

let num = 0;
let other = -125;

rightArrow.addEventListener("click", moveRight);

function moveRight() {
  if (num < 3) {
    sectionLinks.style.marginLeft = other + "px";
    other -= 125;
    num++;
    console.log(num);
  } else {
    sectionLinks.style.marginLeft = 0 + "px";
    other = -125;
    num = 0;
  }
}
