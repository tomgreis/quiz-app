const mainElement = document.querySelector('[data-js="main"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');

// console.log(mainElement);
// console.log(buttonDarkmode);

buttonDarkmode.addEventListener("click", () => {
  mainElement.classList.toggle("body--dark");
});
