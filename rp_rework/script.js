// script.js for rp_rework

// set variables
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");

// initialize buttons
button1.onclick = chooseRock;
button2.onclick = choosePaper;
button3.onclick = chooseScissors;

// define functions
function chooseRock() {
    //console.log("Rock");
    text.innerText = "You selected: Rock";
    playRound();
}

function choosePaper() {
    //console.log("Paper");
    text.innerText = "You selected: Paper";
    playRound();
}

function chooseScissors() {
    //console.log("Scissors");
    text.innerText = "You selected: Scissors";
    playRound();
}

function playRound() {
    //generate random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if(randomNumber ==1) {
        compText.innerText = "Computer selects: Rock";
        console.log("Rock");
    }
    if(randomNumber ==2) {
        compText.innerText = "Computer selects: Paper";
        console.log("Paper");
    }
    if(randomNumber ==3) {
        compText.innerText = "Computer selects: Scissors";
        console.log("Scissors");
    }
}