// script.js for rp_rework

// set variables
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const compText = document.querySelector("#compText");
const resultsText = document.querySelector("#resultsText");
const scoreText = document.querySelector("#scoreText");
let player;
let playerScore=0;
let compScore=0;

// initialize buttons
button1.onclick = chooseRock;
button2.onclick = choosePaper;
button3.onclick = chooseScissors;
text.innerText = `Make your selection\n\nFirst to score 5 wins the game`;

// define functions
function chooseRock() {
    //console.log("Rock");
    text.innerText = "You selected: Rock";
    player = 1;
    playRound();
}

function choosePaper() {
    //console.log("Paper");
    text.innerText = "You selected: Paper";
    player = 2;
    playRound();
}

function chooseScissors() {
    //console.log("Scissors");
    text.innerText = "You selected: Scissors";
    player = 3;
    playRound();
}

function endGame() {
    console.log("WINNER OF THE GAME");
}

function checkWinner() {
    if(playerScore==5 || compScore==5) {
        endGame();
    }
}
function tie() {
    resultsText.innerText = "Results: TIE";
    scoreText.innerText=`Score:\nPlayer: ${playerScore}\nComputer: ${compScore}`;
    checkWinner();
}

function lose() {
    resultsText.innerText = "Results: LOSE";
    compScore++;
    scoreText.innerText=`Score:\nPlayer: ${playerScore}\nComputer: ${compScore}`;
    checkWinner();
}

function win() {
    resultsText.innerText = "Results: WIN";
    playerScore++;
    scoreText.innerText=`Score:\nPlayer: ${playerScore}\nComputer: ${compScore}`;
    checkWinner();
}

function playRound() {
    //generate random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log("Random Number: " + randomNumber);
    //update dom for computer's selection
    if(randomNumber ==1) {
        compText.innerText = "Computer selects: Rock";
    }
    if(randomNumber ==2) {
        compText.innerText = "Computer selects: Paper";
    }
    if(randomNumber ==3) {
        compText.innerText = "Computer selects: Scissors";
    }
    //compare winner of round
    console.log("Player variable: " + player);
    //paper beats rock
    if(randomNumber == 1) {
        if(player==1) {
            tie();
        } 
        else if(player==2) {
            win();
        }
        else {
            lose();
        }
    }
    //scissors beats paper
    if(randomNumber == 2) {
        if(player==1) {
            lose();
        } 
        else if(player==2) {
            tie();
        }
        else {
            win();
        }
    }
    //rock beats scissors
    if(randomNumber == 3) {
        if(player==1) {
            win();
        } 
        else if(player==2) {
            lose();
        }
        else {
            tie();
        }
    }

}

