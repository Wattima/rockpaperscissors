// Game to play rock paper scissors against computer

/*
 start
 take computer's random selection
 take player's selection
 compare each selection
 return winner of round

*/

// declaring array with items

arr = ["rock", "paper", "scissors"];

// computer random selection function
function getComputerChoice() {
    // select random index from array
    randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex);
}

