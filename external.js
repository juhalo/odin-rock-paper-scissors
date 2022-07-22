
function getComputerChoice () {
    /* I know two functions Math.random() and Math.floor() and with
    these two I believe I can force the number to be one of three values.
    I chose these values to be 0,1,2 since starting from zero is natural

    I have chosen to assign these the following way:
    rock=0, paper=1 and scissors=2.

    The way I am doing it does NOT (contrary to my original comment;
    see my commit messages for more info) give any smaller chance for
    getting 'Scissors' or any other choice for that matter. They should
    be exactly equal.
    */
    let choice = Math.floor(Math.random()*3);
    /* I used switch since this kind of case where a value variable
    can only be certain values feels more natural to do by using it
    (at least with the knowledge I have gotten from the material I
    have read so far). */
    switch(choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    /* Converts playerSelection to same format as computerSelection */
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    /* Uses if/else if/else statements. It would probably be more readable
    if I had three separate else if statements; I consider changing this */
    if (playerSelection === computerSelection) {
        return `You Tied!`;
    } else if ((playerSelection==='Scissors' && computerSelection==='Rock') ||
    (playerSelection==='Rock' && computerSelection==='Paper') ||
    (playerSelection==='Paper' && computerSelection==='Scissors')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

}

function game () {
    /* Uses outcome variable to know if lost or won
    if outcome<0=player loses, if outcome===0 = Draw,
    if outcome>0=player wins */
    let outcome = 0;
    for (let i=0; i<5; i++) {
        let roundResult = playRound('Rock', getComputerChoice()).split(" ");
        if (roundResult[1]===`Win!`) {
            outcome += 1;
            console.log(`Win! ${outcome}`);
            continue;
        } else if (roundResult[1]===`Lose!`) {
            outcome -= 1;
            console.log(`Lost! ${outcome}`);
        } else {
            console.log(`Tied! ${outcome}`);
        }
    }
}

game()
