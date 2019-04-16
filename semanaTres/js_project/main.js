let arr = [];
const btnPrint = document.querySelector('.submit');
const inputTxt = document.querySelector('.inputstr');
btnPrint.addEventListener('click', pr);
let counter = 0;

function pr() {
  let newStr = inputTxt.value;
  arr.push(newStr);
  inputTxt.value = "";
  for (i = counter; i <= arr.length; i++) {
    let newElement = document.createElement('div');
    newElement.id = arr[i];
    newElement.className = "list-item";
    newElement.innerHTML = arr[i];
    document.body.appendChild(newElement);
  }
}
