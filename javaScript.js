
// declare variables
let computerSelection;
let playerSelection;
let roundWinner = "";
let winner = "";
let comp = 0;
let player = 0;


// get player's choice from button clicks and then trigger functions
let rock = document.getElementById('rock');
rock.addEventListener("click", rockClicked);

let paper = document.getElementById('paper');
paper.addEventListener("click", paperClicked);

let scissors = document.getElementById('scissors');
scissors.addEventListener("click", scissorsClicked);


// ***************************END OF MAIN

//  DEFINE ALL FUNCTIONS
function rockClicked() {
    //console.log("Rock was clicked");
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    score();
}
    
function paperClicked() {
    //console.log("Paper was clicked");
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    score();
}
    
function scissorsClicked() {
    //console.log("Scissors was clicked");
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    score();
    }

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

function playRound(playerSelection, computerSelection) {
    // get player's choice and console.log
    //playerSelection = getPlayerChoice();
    console.log("Player: " + playerSelection);

    // get computers choice and console.log
    computerSelection = getComputerChoice();
    console.log("Comptr: " + computerSelection);

    // compare parameters rock
    if (playerSelection == "rock") {
        if(computerSelection == "Rock") {
            console.log("Winner: Tie");
            return "Tie";
        }
        else if(computerSelection == "Paper") {
            console.log("Winner: Comp");
            comp++;
            return "Comp";
        }
        else if(computerSelection == "Scissors") {
            console.log("Winner: Player");
            player++;
            return "Player";
        }
    }
    // compare parameters paper
    else if(playerSelection == "paper") {
        if(computerSelection == "Paper") {
            console.log("Winner: Tie");
            return "Tie";
        }
        else if(computerSelection == "Scissors") {
            console.log("Winner: Comp");
            comp++;
            return "Comp";
        }
        else if(computerSelection == "Rock") {
            console.log("Winner: Player");
            player++;
            return "Player";
        }
    }
    // compare parameters scissors
    else if(playerSelection == "scissors") {
        if(computerSelection == "Paper") {
            console.log("Winner: Player");
            player++;
            return "Player";
        }
        else if(computerSelection == "Scissors") {
            console.log("Winner: Tie");
            return "Tie";
        }
        else if(computerSelection == "Rock") {
            console.log("Winner: Comp");
            comp++;
            return "Comp";
        }
    }
}


function score() {
    // update player and comp scores in the variables
    if (roundWinner == "Player") {
        player++;
    } else if (roundWinner == "Comp") {
        comp++;
    }
    console.log("player variable: " + player);
    console.log("comp variable: " + comp);

    // update player and comp scores in the dom
    
    // if either score = 5 
        // display winner in the dom
        // dislay play again button instead of choice buttons
            //button resets scores to zero
            //button changes reset button back to choice buttons
            //button removes winner display from dom
    // 
}


