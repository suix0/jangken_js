function getComputerChoice() {
  // Assign a random int between 1 to 3 to computer choice
  let computerChoice = parseInt(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else if (computerChoice === 3) {
    return "Scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === undefined || computerSelection === undefined) {
    console.log("Please choose between Rock, Paper, or Scissor.")
    return null;
  }
  // make player and computer selection case insensitive
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  // define rules to determine winner
  // starting with rock
  let result = `User: ${playerSelection}\nComputer: ${computerSelection}\nResult: `;

  // draw if both are draw
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return result.concat('Tie');
  }
}
