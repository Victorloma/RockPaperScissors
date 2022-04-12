// Welcome user, ask for choice
// Generate computer's choice with random number
function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    if (computerSelection === 0) { 
        return 'Rock';
    } else if (computerSelection === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
console.log (computerPlay());
// Apoint number values to choices
// Decide who wins, use logic path
// Make game end after 5 wins/losses