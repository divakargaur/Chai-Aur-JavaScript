let randomNum = parseInt((Math.random() * 100) + 1);
let attempt = 10;
let playGame = true;
let prevGuessArr = [];

const p = document.createElement("p");
const form = document.querySelector("form");
const userGuess = document.getElementById("user-guess");
const submit = document.getElementById("submit");
const prevGuess = document.getElementById("prev-guess");
const remainAttempt = document.getElementById("remain-attempt");
const upORlow = document.getElementById("upORlow");
const results = document.getElementById("results");

if (playGame) {
    submit.addEventListener("click", event => {
        event.preventDefault();
        let guess = parseInt(userGuess.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter A Valid Number");
    } else if (guess < 1) {
        alert("Please Enter A Number Greater Than 1");
    } else if (guess > 100) {
        alert("Please Enter A Number Lesser Than 100");
    } else {
        prevGuessArr.push(guess);
        if (attempt === 1) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess) {
    userGuess.value = "";
    prevGuess.innerHTML += `${guess} `;
    attempt -= 1;
    remainAttempt.innerHTML = `${attempt}`;
}

function displayMessage(message) {
    upORlow.innerHTML = `<h2>${message}</h2>`;
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You Guessed it Right`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Input Number is Lesser than Actual Number`);
    } else if (guess > randomNum) {
        displayMessage(`Input Number is Greater than Actual Number`);
    }
}

function endGame() {
    userGuess.value = "";
    userGuess.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    results.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", event => {
        randomNum = parseInt((Math.random() * 100) + 1);
        prevGuessArr = [];
        attempt = 10;
        prevGuess.innerHTML = "";
        upORlow.innerHTML = "";
        remainAttempt.innerHTML = `${attempt}`;
        results.removeChild(p);
        userGuess.removeAttribute("disabled");
        playGame = true;
    })
}