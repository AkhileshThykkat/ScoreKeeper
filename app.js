const playerOne = document.getElementById("p1Score");
const playerTwo = document.getElementById("p2Score");
const firstButton = document.getElementById("p1Button");
const secondButton = document.getElementById("p2Button");
const resetButton = document.getElementById("resetButton");
const winningScoreSelect = document.querySelector("#playTo");
let scoreone = 0;
let scoretwo = 0;
let isGameover = false;
let winningScore = 0;
winningScoreSelect.addEventListener("change", () => {
  winningScore = parseInt(this.value);
  reset();
});
firstButton.addEventListener("click", () => {
  if (!isGameover) {
    scoreone += 1;
    if (scoreone === winningScore) {
      isGameover = true;
    }
    playerOne.innerText = scoreone;
  }
});
secondButton.addEventListener("click", () => {
  if (!isGameover) {
    scoretwo += 1;
    if (scoretwo === winningScore) {
      isGameover = true;
    }
    playerTwo.innerText = scoretwo;
  }
});
resetButton.addEventListener("click", reset);


function reset() {
  playerOne.innerText = 0;
  playerTwo.innerText = 0;
  scoreone = 0;
  scoretwo = 0;
  isGameover = false;
}
