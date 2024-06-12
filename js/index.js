// Bookmark toggeln

const cardBookmark = document.querySelector('[data-js="cardBookmark"]');
const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');

cardBookmark.addEventListener("click", () => {
  if (bookmarkIcon.src.includes("bookmark-regular.svg")) {
    bookmarkIcon.src = "assets/bookmark-solid.svg";
  } else {
    bookmarkIcon.src = "assets/bookmark-regular.svg";
  }
});

// Answer toggeln

const cardElement = document.querySelector('[data-js="cardElement"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');
const buttonAnswer = document.querySelector('[data-js="buttonAnswer"]');

buttonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer");
});
