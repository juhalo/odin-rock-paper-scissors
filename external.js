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
  console.log(`Round ${round++ + 1}: ` + roundResult);
  roundResult = roundResult.split(' ');
  if (roundResult[1] === `Win!`) {
    outcome += 1;
  } else if (roundResult[1] === `Lose!`) {
    outcome -= 1;
  }
}

let outcome = 0;
let round = 0;
const buttons = document.querySelectorAll('button');
let playerSelection = buttons.forEach((button) =>
  button.addEventListener('click', () => addEvent(button.id))
);

//Starts the game
/* function game() {
  // Uses outcome variable to know if lost or won
  let outcome = 0;
  console.log("This is a game of 'Rock Paper Scissors' versus a computer");
  console.log('');
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`Type \'Rock\', \'Paper\' or \'Scissors\'`);
    let roundResult = playRound(playerSelection, getComputerChoice());
    console.log(`Round ${i + 1}: ` + roundResult);
    roundResult = roundResult.split(' ');
    if (roundResult[1] === `Win!`) {
      outcome += 1;
    } else if (roundResult[1] === `Lose!`) {
      outcome -= 1;
    }
  }
  // Checks the outcome of the game
  if (outcome === 0) {
    console.log(`\n` + `You tied the game.`);
  } else if (outcome > 0) {
    console.log(`\n` + `Congratulations! You won the game!`);
  } else {
    console.log(`\n` + `You lost the game. Better luck next time.`);
  }
  let newGame = prompt('Restart game: (Y)es, (N)o');
  if (newGame === 'Y') {
    game();
  }
}

game(); */
