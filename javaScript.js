// declare variables
let computerSelection;
let playerSelection;
let choice;
let correct = false;
let roundWinner = "CLOWN";

//  Main body
playRound();
console.log("Player: " + playerSelection);
console.log("Comptr: " + computerSelection);
console.log(" Round: " + roundWinner);




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

    //return choice in computerSelection variable
    //console.log("Comptr: " + computerSelection);
    return computerSelection;
}


// play one round
function playRound(playerSelection, computerSelection) {
    // get player's choice 
    getPlayerChoice();
    
    // get computer's choice 
    getComputerChoice();
    
    // compare parameters rock
    if (playerSelection == "rock") {
        if(computerSelection == "Rock") {
            roundWinner = "Tie";
        }
        else if(computerSelection == "Paper") {
            roundWinner = "Comp";
        }
        else if(computerSelection == "Scissors") {
            roundWinner = "Player";
        }
    }
    // compare parameters paper
    else if(playerSelection == "paper") {
        if(computerSelection == "Paper") {
            roundWinner = "Tie";
        }
        else if(computerSelection == "Scissors") {
            roundWinner = "Comp";
        }
        else if(computerSelection == "Rock") {
            roundWinner = "Player";
        }
    }
    // compare parameters scissors
    else if(playerSelection == "scissors") {
        //yet even more stuff
    }
    return roundWinner;
}


// play five round game
function game() {
    // loop 5 times

    // play one round: playRound()

    // if tie redo round

    // assign results to a variable

    // end loop

    // return winner decided by variable

}