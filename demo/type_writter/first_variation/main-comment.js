const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words; /* Words that are passed in */
  this.txt = ""; /* Text already written on the area */
  this.wordIndex = 0; /* Index of the work we are in */
  this.wait = parseInt(
    wait,
    10
  ); /* equal to "wait" passed at the start and parse Int to make sure its an integer, with base 10 */
  this.type(); /* Man method associated with type writter */
  this.isDeleting = false; /* Represents the state if its deleting or not */
};

/* Type method */

TypeWriter.prototype.type = function () {
  /* Current index of word */
  const current = this.wordIndex % this.words.length;
  /* Get full text of current index */
  const fullTxt = this.words[current];
  /* Check if isDeleting */
  if (this.isDeleting) {
    /* Remove char */
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    /* Add char */
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  /* Insert txt into element */
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  /* initial type speed */
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  /* If word is completed change speed */
  if (!this.isDeleting && this.txt === fullTxt) {
    /* Make pause at end */
    typeSpeed = this.wait;
    /* Set isDeleting to true */
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    /* Move to the next word */
    this.wordIndex++;
    /* Pase before start typing */
    typeSpeed = 500;
  }

  /* Set timeout to run function at a certain pase */
  setTimeout(() => this.type(), typeSpeed);
};

/* Init on DOM load */
document.addEventListener("DOMContentLoaded", init);

/* Init app */
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
