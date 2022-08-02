function getComputerChoice() {
  // Forces the  values to be either 0 (rock), 1 (paper) or 2 (scissors)
  let choice = Math.floor(Math.random() * 3);
  // Uses switch since only certain options (0,1,2) are possible
  switch (choice) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // Converts playerSelection to same format as computerSelection
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
  if (playerSelection === computerSelection) {
    return `You Tied!`;
  } else if (
    (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function addEvent(clickedButton) {
  let roundResult = playRound(clickedButton, getComputerChoice());
  const rounds = document.querySelector('#rounds');
  const score = document.querySelector('#score');
  const winner = document.querySelector('#winner');
  if (winner.textContent !== null) {
    winner.textContent = null; //removes win/lose text on next game
  }
  rounds.textContent = `Round ${round}: ` + roundResult;
  roundResult = roundResult.split(' ');
  if (roundResult[1] === `Win!`) {
    userWins += 1;
    if (userWins === 5) {
      winner.textContent = 'You are the winner!';
      userWins = 0;
      computerWins = 0;
      round = 0;
    }
  } else if (roundResult[1] === `Lose!`) {
    computerWins += 1;
    if (computerWins === 5) {
      winner.textContent = 'You lost the game!';
      userWins = 0;
      computerWins = 0;
      round = 0;
    }
  }
  score.style.whiteSpace = 'pre'; //Allows '\ n' to create a newline
  score.textContent = `Your score: ${userWins}\nComputer score: ${computerWins}`;
  if (userWins === 0 && computerWins === 0 && round === 0) {
    score.textContent = '';
  }
  round++;
}

function game() {
  userWins = 0;
  computerWins = 0;
  round = 1;
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) =>
    button.addEventListener('click', () => addEvent(button.id))
  );
}

let userWins;
let computerWins;
let round;
//Starts the game
game();
