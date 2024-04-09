const holdBtn = document.querySelector("#hold");
const throwBtn = document.querySelector("#throw");
const nameBtn = document.querySelector("#btn");
const restartBtn = document.querySelector("#restart");
const formEl = document.getElementById("formEl");

nameBtn.addEventListener("click", welcomeMessage);

function welcomeMessage(event) {
  event.preventDefault();

  const enteredName = document.querySelector("input").value;
  const changeHeader = document.querySelector("p");

  formEl.remove();
  changeHeader.textContent = `You are now in-game! Throw the dice ${enteredName}`;
}

let roundCounter = 0;
let totalPoint = 0;
let rounds = 0;

throwBtn.addEventListener("click", gamePlay);

function gamePlay() {
  const dice = Math.ceil(Math.random() * 6);

  if (dice === 1) {
    roundCounter = 0;
    rounds++;
  } else roundCounter += dice;

  const messageCounter = document.getElementById("p1");
  const messageTotal = document.querySelectorAll("p").item(2);
  const messageRounds = document.querySelectorAll("p").item(3);

  messageCounter.textContent = `score for the round: ${roundCounter}`;
  messageTotal.textContent = `Total score: ${totalPoint}`;
  messageRounds.textContent = `Number of rounds: ${rounds}`;
}

holdBtn.addEventListener("click", holdGame);

function holdGame() {
  totalPoint += roundCounter;
  rounds++;
  roundCounter = 0;

  checkGame();

}

function checkGame(){
    if(totalPoint === 100){
        console.log("win")
      }else if(totalPoint >= 101){
        console.log("lost")
      }
}


restartBtn.addEventListener("click", () => {
  location.reload();
});
