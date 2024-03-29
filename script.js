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

const buttonPaper = document.querySelector(".paper");

buttonPaper.addEventListener("click", () => {
    playerChoice = "paper";
    getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    game();
});

const buttonScissors = document.querySelector(".scissors");

buttonScissors.addEventListener("click", () => {
    playerChoice = "scissors";
    getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    game();
});


const choices = document.querySelector("#choices");
let choice = document.createElement("p");
choices.style.width = "500px";
choices.style.height = "100px";


const outcomeBox = document.querySelector("#outcomeBox");
let outcome = document.createElement("p");



function displayChoices() {
    choice.textContent(playerChoice + " vs " + computerChoice);
    choices.appendChild(choice);
}


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
    } 

    displayChoices();

}

const resultsArrayHuman = [];
const resultsArrayComputer = [];

let playerScore = resultsArrayHuman;
let computerScore = resultsArrayComputer;

const results = document.querySelector("#results");
const humanResults = document.createElement("p");
const computerResults = document.createElement("p");

results.style.backgroundColor = "rgb(218, 92, 42)";
results.style.color = "white";
results.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
results.style.fontSize = "25px";
results.style.padding = "20px";
results.style.borderRadius = "30px";
results.style.margin = "10px";
results.style.border = "solid rgb(255, 255, 255)";
results.appendChild(humanResults);
results.appendChild(computerResults);

const endgameBox = document.querySelector("#endgameBox");
const endgameStatement = document.createElement("p");
const endgameWinnerAnnouncement = document.createElement("p");

const endGame = function() {
endgameStatement.textContent = "Final score: Human: " + playerScore + ", Computer: " + computerScore;
if (playerScore < computerScore) {
    endgameWinnerAnnouncement.textContent = "The computer is victorious... Human as been defeated.";
    endgameBox.appendChild(endgameStatement);
    endgameBox.appendChild(endgameWinnerAnnouncement);
} else if (playerScore > computerScore) {
    endgameStatement.textContent = "Human has succeeded. Computer is defeated.";
    endgameBox.appendChild(endgameStatement);
    endgameBox.appendChild(endgameWinnerAnnouncement);
} else if (playerScore == computerScore) {
    endgameStatement.textContent = "You both destroyed each other. In war, there are no winners";
    endgameBox.appendChild(endgameStatement);
    endgameBox.appendChild(endgameWinnerAnnouncement);
}
buttonRock.disabled = true;
buttonPaper.disabled = true;
buttonScissors.disabled = true;

buttonRock.style.backgroundColor = "grey";
buttonPaper.style.backgroundColor = "grey";
buttonScissors.style.backgroundColor = "grey";
}

function game() {

    // for (let i = 1; i < 6; i++) { 
  let result = playRound(playerChoice, computerChoice);
  console.log(result);
  if (result.startsWith("You win!")) {
    playerScore++; resultsArrayHuman.push(playerScore);
    outcome.textContent = (result);
    outcomeBox.appendChild(outcome);
  } if (result.startsWith("You lose!")) {
    computerScore++; resultsArrayComputer.push(computerScore);
    outcome.textContent = (result);
    outcomeBox.appendChild(outcome);
  } if (result.startsWith("It's a tie!")) {
    playerScore++; resultsArrayHuman.push(playerScore);
    computerScore++; resultsArrayComputer.push(computerScore);
    outcome.textContent = (result);
    outcomeBox.appendChild(outcome);
  }
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
  humanResults.textContent = `Human: ${playerScore}`;
computerResults.textContent = `Computer: ${computerScore}`;
}
// }
