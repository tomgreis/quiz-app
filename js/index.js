console.clear();

// Toggle bookmark icon

const cardBookmark = document.querySelector('[data-js="cardBookmark"]');
const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');

cardBookmark.addEventListener("click", () => {
  if (bookmarkIcon.src.endsWith("bookmark-regular.svg")) {
    bookmarkIcon.src = "assets/bookmark-solid.svg";
  } else {
    bookmarkIcon.src = "assets/bookmark-regular.svg";
  }
});

// function toggleBookmark() {
//   if (bookmarkIcon.src.includes("bookmark-regular.svg")) {
//     bookmarkIcon.src = "assets/bookmark-solid.svg";
//   } else {
//     bookmarkIcon.src = "assets/bookmark-regular.svg";
//   }
// };

// cardBookmark.addEventListener("click", toggleBookmark);

// Toggle hidden field + toggle button text

const cardElement = document.querySelector('[data-js="cardElement"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');
const buttonAnswer = document.querySelector('[data-js="buttonAnswer"]');

buttonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer");

  if (buttonAnswer.textContent === "Show Answer") {
    buttonAnswer.textContent = "Hide Answer";
  } else {
    buttonAnswer.textContent = "Show Answer";
  }
});
