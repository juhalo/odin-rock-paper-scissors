
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
