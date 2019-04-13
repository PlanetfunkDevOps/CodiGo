class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } /* else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    } */

    setTimeout(() => this.type(), typeSpeed);
  }
}

const txtElement = document.querySelector('.txt-type');
const change = document.querySelector('.change');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement.getAttribute('data-wait');
document.addEventListener("DOMContentLoaded", new TypeWriter(txtElement, words, wait));

change.addEventListener('click', new TypeWriter(txtElement, words, wait))

/*
function init() {


  new TypeWriter(txtElement, words, wait);
} */













