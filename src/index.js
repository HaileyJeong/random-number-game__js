const gameForm = document.getElementById("game-form");
const rangeNum = document.getElementById("rangevalue");
const selectNum = document.getElementById("selectvalue");
const gameSummary = document.getElementById("summary");
const gameResult = document.getElementById("result");

function makeRandNum() {
  return Math.ceil(Math.random() * rangeNum.value);
}

function handleGameResult(event) {
  event.preventDefault();
  const userNum = Number(selectNum.value);
  const machineNum = makeRandNum(rangeNum);
  gameSummary.innerText = `You chose: ${userNum}, the machine chose ${machineNum}.`;

  if (userNum === machineNum) {
    gameResult.innerText = "You win!";
  } else {
    gameResult.innerText = "You lose!";
  }
}

gameForm.addEventListener("submit", handleGameResult);
