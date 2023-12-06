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
