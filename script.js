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

  // define cases to determine winner
  let result = `You: ${playerSelection}\nComputer: ${computerSelection}\nResult: `;

  // starting with cases when user picks ROCK
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return result.concat('Tie');
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return result.concat("Computer Win");
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
    return result.concat("You WIN");

  // now check cases when user chooses PAPER
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return result.concat("Tie");
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return result.concat("You WIN");
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
    return result.concat("Computer WIN");

  // lastly, check cases for when user chooses SCISSOR
  } else if (playerSelection === "SCISSOR" && computerSelection === "SCISSOR") {
    return result.concat("Tie");
  } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
    return result.concat("You WIN");
  } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
    return result.concat("Computer WIN");
  } else {
    alert("Please enter a valid input.");
    return -1;
  }

}

function game() {
  let playerChoice;
  let computerChoice;
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Rock, Paper, Scissor?");
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
}

game();
