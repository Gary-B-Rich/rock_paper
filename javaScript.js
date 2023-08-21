// declare variables
let comp;
let computerSelection;
let playerSelection;
let choice;
let correct = false;


// get player's choice
function getPlayerChoice() {
    while(correct == false) {
        // get input from player
        choice = prompt("Rock, Paper, or Scissors?");
        // plan for case sensitivity
        playerSelection = choice.toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            correct = true;
        }
        else {
            alert("Not a valid response");
        }
    }
    console.log(playerSelection);
    return playerSelection;
}


function getComputerChoice() {
    //generate random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 3) + 1;

    //assign number to choice
    if (randomNumber == 1) {
        comp = "Rock";
    }
    else if (randomNumber == 2) {
        comp = "Paper";
    }
    else if (randomNumber == 3) {
        comp = "Scissors";
    }

    //return choice in comp variable
    return comp;
}


function playRound(playerSelection, computerSelection) {
    // compare parameters

    // return winner
}


//  Main body
getPlayerChoice();
getComputerChoice();