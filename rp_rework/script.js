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
    console.log("Rock");
    text.innerText = "Rock has been selected.";
}

function choosePaper() {
    console.log("Paper");
    text.innerText = "Paper has been selected.";
}

function chooseScissors() {
    console.log("Scissors");
    text.innerText = "Scissors has been selected.";
}