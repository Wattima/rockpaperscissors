// Game to play rock paper scissors against computer

/*
 start
 take computer's random selection
 take player's selection
 compare each selection
 return winner of round

*/

// declaring array with items

let arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return "Tie";
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    return "You Win! Paper beats Rock";
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    return "You Lose! Paper beats Rock";
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    return "You Lose! Rock beats Scissors";
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    return "You Win! Rock beats Scissors";
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    return "You Win! Scissors beat Paper";
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    return "You Lose! Scissors beat Paper";
  } else {
    return "Invalid choice";
  }
}

function updateScores(playerScore, computerScore) {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function displayFinalResult(winner) {
  const finalResultContainer = document.getElementById("final-result-container");
  const finalResultElement = document.createElement("p");
  finalResultElement.textContent = `The winner is: ${winner}`;
  finalResultContainer.appendChild(finalResultElement);
}

let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", () => {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  const result = playRound(computerChoice, playerChoice);

  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }

  updateScores(playerScore, computerScore);

  if (playerScore === 5) {
    displayFinalResult("You");
  } else if (computerScore === 5) {
    displayFinalResult("Computer");
  }

  console.log(result);
});

document.getElementById("paper").addEventListener("click", () => {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  const result = playRound(computerChoice, playerChoice);

  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }

  updateScores(playerScore, computerScore);

  if (playerScore === 5) {
    displayFinalResult("You");
  } else if (computerScore === 5) {
    displayFinalResult("Computer");
  }

  console.log(result);
});

document.getElementById("scissors").addEventListener("click", () => {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  const result = playRound(computerChoice, playerChoice);

  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }

  updateScores(playerScore, computerScore);

  if (playerScore === 5) {
    displayFinalResult("You");
  } else if (computerScore === 5) {
    displayFinalResult("Computer");
  }

  console.log(result);
});
