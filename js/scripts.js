let divButtons = (document.getElementById("buttons").style.display = "none");
const changeHeader = document.querySelector("p");
const formEl = document.getElementById("formEl");

formEl.addEventListener("submit", startGame);

function startGame(event) {
  event.preventDefault();

  const enteredName = document.querySelector("input").value;

  formEl.remove();
  changeHeader.textContent = `You are now in-game! Throw the dice ${enteredName}`;

  divButtons = document.getElementById("buttons").style.display = "block";
}

let roundCounter = 0;
let totalPoint = 0;
let rounds = 0;

const throwBtn = document
  .querySelector("#throw")
  .addEventListener("click", gamePlay);

function gamePlay() {
  const dice = Math.ceil(Math.random() * 6);

  if (dice === 1) {
    roundCounter = 0;
    rounds++;
  } else roundCounter += dice;

  const diceRoll = document.querySelectorAll("p").item(4);

  diceRoll.textContent = `You rolled: ${dice}`;

  counterMessages();
}

function counterMessages() {
  const messageCounter = document.getElementById("p1");
  const messageTotal = document.querySelectorAll("p").item(2);
  const messageRounds = document.querySelectorAll("p").item(3);

  messageCounter.textContent = `score for the round: ${roundCounter}`;
  messageTotal.textContent = `Total score: ${totalPoint}`;
  messageRounds.textContent = `Number of rounds: ${rounds}`;
}

const holdBtn = document
  .querySelector("#hold")
  .addEventListener("click", holdGame);

function holdGame() {
  totalPoint += roundCounter;
  rounds++;
  roundCounter = 0;

  counterMessages();
  checkGame();
}

function checkGame() {
  if (totalPoint >= 100) {
    changeHeader.textContent = `Congratualtions you won! it took you ${rounds} rounds
    to reach a score of ${totalPoint}. Press restart to play again`;

    document.getElementById("hold").disabled = true;
    document.getElementById("throw").disabled = true;
  }
}

const restartBtn = document
  .querySelector("#restart")
  .addEventListener("click", () => {
    location.reload();
  });
