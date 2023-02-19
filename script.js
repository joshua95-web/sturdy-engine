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
    return playerChoice;
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "It's a tie!";
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper covers rock. Idiot.";
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock smashes scissors.";
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper covers rock.";
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "It's a tie!";
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cuts paper. Ouch.";
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock smashes scissors.";
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! scissors cuts paper. Snipsnip.";
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let results = [];

for (let i = 1; i < 6; i++) {
  let result = playRound();
  console.log(result);
  results.push(result);
  if (result.startsWith("You win!")) {
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    computerScore++;
  }
}
console.log("Final score: Human: " + playerScore + ", Computer: " + computerScore);
if (playerScore < computerScore) {
    console.log("The computer is victorious... Human as been defeated.");
} else if (playerScore > computerScore) {
    console.log ("Human has succeeded. Computer is defeated.");
} else if (playerScore = computerScore) {
    console.log("You both destroyed each other. In war, there are no winners");
}
}