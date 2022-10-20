const PATTERNS = [
  [4],
  [2, 6],
  [2, 4, 6],
  [0, 2, 6, 8],
  [0, 2, 4, 6, 8],
  [0, 2, 3, 5, 6, 8],
];

const heading = document.getElementById("title");

let playerOneThrow = Math.floor(Math.random() * 6);
let playerTwoThrow = Math.floor(Math.random() * 6);

if (playerOneThrow > playerTwoThrow) {
  heading.innerText = "🚩Player one wins!";
} else if (playerTwoThrow > playerOneThrow) {
  heading.innerText = "Player two wins!🚩";
} else {
  heading.innerText = "Draw!";
}

function renderDice(selector, playerThrow) {
  let diceDots = document.querySelectorAll(selector + " .dot");
  let dicePattern = PATTERNS[playerThrow];

  for (var i = 0; i < dicePattern.length; i++)
    diceDots[dicePattern[i]].classList.add("visible");
}

renderDice("#player-one-dice", playerOneThrow);
renderDice("#player-two-dice", playerTwoThrow);
