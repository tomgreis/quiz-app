const bodyElement = document.querySelector('[data-js="body"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');

// console.log(bodyElement);
// console.log(buttonDarkmode);

buttonDarkmode.addEventListener("click", () => {
  bodyElement.classList.toggle("body--dark");
});
