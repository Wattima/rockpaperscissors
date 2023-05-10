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
// let computerChoice =  getComputerChoice();
// console.log(computerChoice)





function playRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        return "Tie"
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        return "You Win! Paper beats Rock"
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        return "You Lose! Paper beats Rock"
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        return 'You Lose! Rock beats scissors'
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        return 'You Win! Rock beats scissors'
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        return 'You Win! Scissors beat Paper'
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        return 'You Lose! Scissors beat Paper'
    } else {
        return "Invalid choice"
    }

}

// let singleRound = playRound(computerChoice, playerChoice)

// Five rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++) {
        // Take player's input
        let playerChoice = prompt("Enter your choice: ").toLowerCase()
        // console.log(playerChoice)
        let computerChoice =  getComputerChoice();
        // console.log(computerChoice)
        let result = playRound(computerChoice, playerChoice)
        console.log(result)

        if (result.includes("Win")) {
            playerScore++
        } else if (result.includes("Lose")) {
            computerScore++
        }


    }
    if (computerScore == playerScore) {
        console.log("It's a Tie!")
    } else if (computerScore < playerScore) {
        console.log("You Win the Game!")
    } else {
        console.log("You Lose the Game!")
    }
}

game();

