
// declare variables
let computerSelection;
let playerSelection;
let choice;
let lower;
let correct = false;
let roundWinner = "CLOWN";
let winner = "CLOWN";
let comp = 0;
let player = 0;

//  Main body *************************
//alert("The buttons should be loaded");

//winner = game();
console.log(`Winner: ${winner}`);

if(winner == "Comp") {
    alert("Sorry, you lose.");
}
else {
    //alert("Congratulations, you win!");
    console.log("You win");
}
//*************************************

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
    //console.log("Player: " + playerSelection);

    // get computers choice and console.log
    computerSelection = getComputerChoice();
    //console.log("Comptr: " + computerSelection);

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
    //set loop variable
    i = 1;
    while(i < 6) {
        // play one round 
        roundWinner = playRound();
        console.log(`Round ${i} winner: ` + roundWinner);
        if(roundWinner == "Player") {
            player++;
            i++;
        }
        else if(roundWinner == "Comp") {
            comp++;
            i++;
        }
    // if tie loop doesn't advance
    }
    // return winner decided by variable
    if(player > comp) {
        return "Player";
    }
    else if(player < comp) {
        return "Comp";
    }

}


