const suitsArray = ["♦", "♥", "♠", "♣"];
const cardValueArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};
const generateCard = () => {
  let newSuit = getRandomElement(suitsArray);
  let newValue = getRandomElement(cardValueArray);

  let topIcon = document.getElementById("botIcon");
  let botIcon = document.getElementById("topIcon");
  let cardValue = document.getElementById("cardNumber");

  topIcon.innerText = botIcon.innerText = newSuit;
  cardValue.innerText = newValue;

  newSuit === "♦" || newSuit === "♥"
    ? (topIcon.style.color = botIcon.style.color = cardValue.style.color =
        "red")
    : (topIcon.style.color = botIcon.style.color = cardValue.style.color =
        "black");
};
window.onload = function() {
  generateCard();
};

const card = document.querySelector(".card");
card.addEventListener("click", generateCard);

window.setInterval(() => {
  generateCard();
}, 10000);

const cardWidth = document.getElementById("widthInput");
const cardHeigth = document.getElementById("heigthInput");

const resizeCard = () => {
  card.style.width = `${cardWidth.value || 200}px`;
  card.style.height = `${cardHeigth.value || 250}px`;
};

cardWidth.addEventListener("input", resizeCard);
cardHeigth.addEventListener("input", resizeCard);
