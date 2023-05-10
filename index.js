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

// computer random selection function
function getComputerChoice() {
    // select random index from array
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
let computerChoice =  getComputerChoice();
console.log(computerChoice)

// Take player's input

let playerChoice = prompt("Enter your choice: ").toLowerCase()
console.log(playerChoice)

function singleRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("Tie")
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("You Win! Paper beats Rock")
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log("You Lose! Paper beats Rock")
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        console.log('You Lose! Rock beats scissors')
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        console.log('You Win! Rock beats scissors')
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        console.log('You Win! Scissors beat Paper')
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        console.log('You Lose! Scissors beat Paper')
    } else {
        console.log("Invalid choice")
    }

}

singleRound(computerChoice, playerChoice)

