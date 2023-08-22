// declare variables
let computerSelection;
let playerSelection;
let choice;
let lower;
let correct = false;
let roundWinner = "CLOWN";

//  Main body
roundWinner = playRound();
console.log(" Round: " + roundWinner);




// DEFINE ALL FUNCTIONS

// get player's choice
function getPlayerChoice() {
    // continue loop until player input is correct
    correct = false;
    while(correct == false) {
        // get input from player
        choice = prompt("Rock, Paper, or Scissors?");
        if(choice == null) {
            choice = "";
        }
        // plan for case sensitivity
        lower = choice.toLowerCase();
        // check for usage
        if (lower == "rock" || lower == "paper" || lower == "scissors") {
            correct = true;
        }
        else {
            alert("Not a valid response");
        }
    }
    return lower;
}


// get computer's choice
function getComputerChoice() {
    //generate random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 3) + 1;

    //assign number to choice
    if (randomNumber == 1) {
        return "Rock";
    }
    else if (randomNumber == 2) {
        return "Paper";
    }
    else if (randomNumber == 3) {
        return "Scissors";
    }
}


// play one round
function playRound(playerSelection, computerSelection) {
    // get player's choice and console.log
    playerSelection = getPlayerChoice();
    console.log("Player: " + playerSelection);

    // get computers choice and console.log
    computerSelection = getComputerChoice();
    console.log("Comptr: " + computerSelection);

    // compare parameters rock
    if (playerSelection == "rock") {
        if(computerSelection == "Rock") {
            return "Tie";
        }
        else if(computerSelection == "Paper") {
            return "Comp";
        }
        else if(computerSelection == "Scissors") {
            return "Player";
        }
    }
    // compare parameters paper
    else if(playerSelection == "paper") {
        if(computerSelection == "Paper") {
            return "Tie";
        }
        else if(computerSelection == "Scissors") {
            return "Comp";
        }
        else if(computerSelection == "Rock") {
            return "Player";
        }
    }
    // compare parameters scissors
    else if(playerSelection == "scissors") {
        if(computerSelection == "Paper") {
            return "Player";
        }
        else if(computerSelection == "Scissors") {
            return "Tie";
        }
        else if(computerSelection == "Rock") {
            return "Comp";
        }
    }
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