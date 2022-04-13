const choices = ["rock", "paper", "scissors"];
const victors = [];

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function humanPlay(){
    let input = prompt("Pick your weapon: Rock, Paper or Scissors");
    input =  input.toLowerCase();
    return input;
}

function getVictor(humanWeapon, machineWeapon){
    if (humanWeapon === machineWeapon){
        return "Draw";
    } else if ((humanWeapon === "rock" && machineWeapon === "scissors")||
    (humanWeapon === "paper" && machineWeapon === "rock")||
    (humanWeapon === "scissors" && machineWeapon === "paper")){
        return "Human";
    } else {
        return "Machine";
    }
}

function playRound(){
    const playerSelection = humanPlay();
    const computerSelection = computerPlay();
    let winner = getVictor(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
    console.log("----------------");
    victors.push(winner);
}

function logVictor() {
    let humanWins = victors.filter((item) => item === "Human").length;
    let machineWins = victors.filter((item) => item === "Machine").length;
    let draws = victors.filter((item) => item === "Draw").length;
    console.log("Human: " + humanWins);
    console.log("Machine: " + machineWins);
    console.log("Draws: " + draws);
    if (humanWins > machineWins){
        console.log("Mankind wins!");
    } else if (machineWins > humanWins) {
        console.log("Skynet wins!");
    } else {
        console.log("No one wins..");
    }
}

function game(){
    for(i=0; i<5; i++){
        playRound(i);
    }
logVictor();
}

game();