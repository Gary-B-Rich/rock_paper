
// declare variables
let computerSelection;
let playerSelection;
let choice;
let buttonChoice;
let lower;
let correct = false;
let roundWinner = "CLOWN";
let winner = "CLOWN";
let comp = 0;
let player = 0;

// DEFINE ALL FUNCTIONS

// get player's choice from buttons
let rock = document.getElementById('rock');
rock.addEventListener("click", rockClicked);

let paper = document.getElementById('paper');
paper.addEventListener("click", paperClicked);

let scissors = document.getElementById('scissors');
scissors.addEventListener("click", scissorsClicked);

    function rockClicked() {
        //console.log("Rock was clicked");
        playerSelection = "rock";
        playRound(playerSelection, computerSelection);
    }
    function paperClicked() {
        //console.log("Paper was clicked");
        playerSelection = "paper";
        playRound(playerSelection, computerSelection);
    }
    function scissorsClicked() {
        //console.log("Scissors was clicked");
        playerSelection = "scissors";
        playRound(playerSelection, computerSelection);
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
            return "Comp";
        }
        else if(computerSelection == "Scissors") {
            console.log("Winner: Player");
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
            return "Comp";
        }
        else if(computerSelection == "Rock") {
            console.log("Winner: Player");
            return "Player";
        }
    }
    // compare parameters scissors
    else if(playerSelection == "scissors") {
        if(computerSelection == "Paper") {
            console.log("Winner: Player");
            return "Player";
        }
        else if(computerSelection == "Scissors") {
            console.log("Winner: Tie");
            return "Tie";
        }
        else if(computerSelection == "Rock") {
            console.log("Winner: Comp");
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


