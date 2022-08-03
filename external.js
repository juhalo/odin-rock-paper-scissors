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
  let roundResult = playRound(
    clickedButton.target.textContent,
    getComputerChoice()
  );
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
  buttons.forEach((button) => button.addEventListener('click', addEvent));
}

let userWins;
let computerWins;
let round;

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const rock = document.createElement('button');
rock.setAttribute('id', 'rock');
rock.textContent = 'Rock';
buttons.appendChild(rock);

const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
paper.textContent = 'Paper';
buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors');
scissors.textContent = 'Scissors';
buttons.appendChild(scissors);

document.body.appendChild(buttons);

const results = document.createElement('div');
results.classList.add('results');

const rounds = document.createElement('div');
rounds.setAttribute('id', 'rounds');
results.appendChild(rounds);

const score = document.createElement('div');
score.setAttribute('id', 'score');
results.appendChild(score);

const winner = document.createElement('div');
winner.setAttribute('id', 'winner');
results.appendChild(winner);
document.body.appendChild(results);
//Starts the game
game();
