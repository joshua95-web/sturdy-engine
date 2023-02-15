const computerChoice = Math.random();
if (computerChoice < .33) {
    computerChoice = "rock";
} else if (computerChoice <= .67) {
    computerChoice = "paper";
} else { computerChoice = "scissors";
}