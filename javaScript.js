// declare variables
let comp;
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


// get computer's choice
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

    // play one round playRound()

    // assign results to a variable

    // end loop

    // return winner decided by variable
    console.log(roundWinner);
    return roundWinner;
}