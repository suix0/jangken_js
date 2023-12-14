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

const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const announcement = document.querySelector('.announcement');
const announcementContainer = document.querySelector('.announcement-container');

function updateStatus(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    announcement.textContent = "Woops! That's a tie!";
  }

  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
}

function wordsOfPraise() {
  const words = ['Wow, keep at it!', "That's amazing!", "You're almost there in beating the computer!", "Nice one!", "You're good! Keep it up!"];
  announcement.textContent = words[Math.floor(Math.random() * words.length)];
}

function wordsOfEncouragement() {
  const words = ["It's okay! Try again!! :D", "the ROBOT just got LUCKY. try again!", "It's okay, don't give up!", "You can do it!"];
  announcement.textContent = words[Math.floor(Math.random() * words.length)];
}


let pScore = 0;
let cScore = 0;

playerScore.textContent = pScore;
computerScore.textContent = cScore;

function playRound(playerSelection, computerSelection) {
  // make player and computer selection case insensitive
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  // starting with cases when user picks ROCK
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    updateStatus(playerSelection, computerSelection);

  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    wordsOfEncouragement();
    updateStatus(playerSelection, computerSelection);
    cScore++;
    computerScore.textContent = cScore;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
    wordsOfPraise();
    updateStatus(playerSelection, computerSelection);
    pScore++;
    playerScore.textContent = pScore;

  // now check cases when user chooses PAPER
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    updateStatus(playerSelection, computerSelection);

  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    wordsOfPraise();
    updateStatus(playerSelection, computerSelection);
    pScore++;
    playerScore.textContent = pScore;

  } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
    wordsOfEncouragement();
    updateStatus(playerSelection, computerSelection);
    cScore++;
    computerScore.textContent = cScore;

  // lastly, check cases for when user chooses SCISSOR
  } else if (playerSelection === "SCISSOR" && computerSelection === "SCISSOR") {
    updateStatus(playerSelection, computerSelection);

  } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
    wordsOfPraise();
    updateStatus(playerSelection, computerSelection);
    pScore++;
    playerScore.textContent = pScore;

  } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
    wordsOfEncouragement();
    updateStatus(playerSelection, computerSelection);
    cScore++;
    computerScore.textContent = cScore;

  } else {
    alert("Please enter a valid input.");
    return -1;
  }

  const para = document.createElement('p');
  para.textContent = 'Please refresh to play again!';

  if (pScore === 5 && cScore < 5) {
    announcement.textContent = '';
    announcement.textContent = 'You win! Great job!';
    announcementContainer.appendChild(para);
  } else if (pScore < 5 && cScore === 5) {
    announcement.textContent = '';
    announcement.textContent = "The computer win";
    announcementContainer.appendChild(para);
  } else if (pScore === 5 && cScore === 5) {
    announcement = textContent = '';
    announcement.textContent = "Wow. A tie :0";
    announcementContainer.appendChild(para);
  }

}

function game() {
  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissor = document.querySelector('.scissor');

  rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
  });

  paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
  });

  scissor.addEventListener('click', () => {
    playRound('scissor', getComputerChoice());
  });
}

game();
