function getComputerChoice() {

let computerChoice;

const computerNumber = Math.random();
if (computerNumber < .33) {
    computerChoice = "rock";
} else if (computerNumber <= .67) {
    computerChoice = "paper";
} else { computerChoice = "scissors";
}
return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("Rock, paper or scissors?");
}

function playRound(playerSelection, computerSelection) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "It's a tie!";
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock. Idiot.";
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }
}