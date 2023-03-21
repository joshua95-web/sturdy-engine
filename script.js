let computerChoice;

function getComputerChoice() {

const computerNumber = Math.random();
if (computerNumber < .33) {
    computerChoice = "rock";
} else if (computerNumber <= .67) {
    computerChoice = "paper";
} else { computerChoice = "scissors";
}
return computerChoice;
}



const buttonRock = document.querySelector(".rock");

buttonRock.addEventListener("click", () => {
    playerChoice = "rock";
    getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    game();
});



function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        return "It's a tie!";
    }
    if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper covers rock. Idiot.";
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock smashes scissors.";
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper covers rock.";
    }
    if (playerChoice === "paper" && computerChoice === "paper") {
        return "It's a tie!";
    }
    if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors cuts paper. Ouch.";
    }
    if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock smashes scissors.";
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! scissors cuts paper. Snipsnip.";
    }
    if (playerChoice === "scissors" && computerChoice === "scissors") {
        return "It's a tie!";
    } else {
        return "Invalid input. Please choose rock, paper, or scissors.";
    }
}

const results = document.querySelector("#results");
const humanResults = document.createElement("p");
const computerResults = document.createElement("p");
humanResults.textContent = "Human:";
computerResults.textContent = "Computer:";

results.style.backgroundColor = "green";
results.style.color = "white";

results.appendChild(humanResults);
results.appendChild(computerResults);

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const resultsArray = [];



for (let i = 1; i < 6; i++) {
  let result = playRound(playerChoice, computerChoice);
  console.log(result);
  if (result.startsWith("You win!")) {
    playerScore++; resultsArray.push(playerScore);
  } else if (result.startsWith("You lose!")) {
    computerScore++; resultsArray.push(computerScore);
  }
}


console.log("Final score: Human: " + playerScore + ", Computer: " + computerScore);
if (playerScore < computerScore) {
    console.log("The computer is victorious... Human as been defeated.");
} else if (playerScore > computerScore) {
    console.log ("Human has succeeded. Computer is defeated.");
} else if (playerScore == computerScore) {
    console.log("You both destroyed each other. In war, there are no winners");
}
}