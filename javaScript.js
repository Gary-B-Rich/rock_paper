// declare variables
let computerSelection;
let playerSelection;
let choice;
let correct = false;
let roundWinner;

//  Main body
getPlayerChoice();
getComputerChoice();





// DEFINE ALL FUNCTIONS

// get player's choice
function getPlayerChoice() {
    // continue loop until player input is correct
    while(correct == false) {
        // get input from player
        choice = prompt("Rock, Paper, or Scissors?");
        // plan for case sensitivity
        playerSelection = choice.toLowerCase();
        // check for usage
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


// get computer's choice
function getComputerChoice() {
    //generate random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 3) + 1;

    //assign number to choice
    if (randomNumber == 1) {
        computerSelection = "Rock";
    }
    else if (randomNumber == 2) {
        computerSelection = "Paper";
    }
    else if (randomNumber == 3) {
        computerSelection = "Scissors";
    }

    //return choice in comp variable
    console.log(computerSelection);
    return computerSelection;
}


// play one round
function playRound(playerSelection, computerSelection) {
    // get player's choice 
    getPlayerChoice();
    
    // get computer's choice 
    getComputerChoice();
    
    // compare parameters
    if (playerSelection == "rock") {
        //stuff
    }
    else if(playerSelection == "paper") {
        //more stuff
    }
    else if(playerSelection == "scissors") {
        //yet even more stuff
    }

    // return roundWinner
}


// play five round game
function game() {
    // loop 5 times

    // play one round: playRound()

    // if tie redo round

    // assign results to a variable

    // end loop

    // return winner decided by variable
    console.log(roundWinner);
    return roundWinner;
}