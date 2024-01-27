// defining HTML variables.
let winnig = document.querySelector(".winnig");
var diceOneImage = document.querySelectorAll("img")[0];
var diceTwoImage = document.querySelectorAll("img")[1];
var message = document.querySelector(".message");

//Defining button variables
let play = document.querySelector(".play");
let reset = document.querySelector(".reset");

//Getting random image
var randamNumber = Math.floor((Math.random() * 6) + 1);
var randomDiceImg ="dice" + randamNumber + ".png";

var randamNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImg1 ="dice" + randamNumber1 + ".png";




function playButton() {
    play.addEventListener("click", () => {
        diceOneImage.setAttribute("src", randomDiceImg);
        diceTwoImage.setAttribute("src", randomDiceImg1);
        winnerAnouncement();

    })
}
playButton();

function winnerAnouncement() {
    if (randamNumber > randamNumber1) {
        message.innerText = "User One Win";
    } else if (randamNumber1 > randamNumber) {
        message.innerText = "User Two Win";
    } else {
        message.innerText = "Draw!!";
    }
}
function resetButton() {
    reset.addEventListener("click", () => {
        console.log("reset");
        message.innerText = "Let's Play";
        diceOneImage.setAttribute("src", "images/dice1.png");
        diceTwoImage.setAttribute("src", "images/dice1.png");
        location.reload()
    })
} resetButton();
