// Add form

console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // console.log(data);

  const formDataFocus = event.target.elements;
  event.target.reset();
  formDataFocus.yourQuestion.focus();
});

// Add cards

const testCardContainer = document.querySelector('[data-js="card-container"]');
const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const yourAnswer = document.querySelector('[data-js="yourAnswer"]');
const yourTag = document.querySelector('[data-js="yourTag"]');
const addCardButton = document.querySelector('[data-js="addCardButton"]');
const clearButton = document.querySelector('[data-js="removeCardButton"]');

addCardButton.addEventListener("click", () => {
  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.innerHTML = `
  <span class="card">
  <p class="card__question">${yourQuestion.value}</p>
  <p >${yourAnswer.value}</p>
  <div class="tag__container">
          <div class="tag__item">#${yourTag.value}</div>
  </span>`;
  testCardContainer.append(newCard);
});

clearButton.addEventListener("click", () => {
  event.preventDefault();
  testCardContainer.innerHTML = "";
});

// Add counter

// const inputYourQuestion = document.querySelector('[data-js="yourQuestion"]');
// const inputYourQuestionRemainingCharacters = document.querySelector(
//   '[data-js="yourQuestionRemainingCharacters"]'
// );

// inputYourQuestion.addEventListener("input", (event) => {
//   const inputYourQuestionLength = event.target.value.length;
//   yourQuestionRemainingCharacters.innerText = 150 - inputYourQuestionLength;
// });
