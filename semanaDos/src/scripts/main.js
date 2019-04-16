const card = document.querySelectorAll('.card-holder');
let flip_card = false;

card.forEach(item => item.addEventListener("click", flipCard));

function flipCard() {
  console.log('this', this)
  if (!flip_card) {
    this.classList.add('is-flipped')
    flip_card = true;
  } else {
    this.classList.remove('is-flipped')
    flip_card = false;
  }
}
