// Darkmode

console.log("adf");

const bodyElement = document.querySelector('[data-js="body"]');
const h1Element = document.querySelector('[data-js="h1"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');

// console.log(bodyElement);
// console.log(buttonDarkmode);

buttonDarkmode.addEventListener("click", () => {
  console.log("hello");
  bodyElement.classList.toggle("body--dark");
  h1Element.classList.toggle("header-title--dark");
});
