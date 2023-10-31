const body = document.querySelector("body");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let intervalID;

startButton.addEventListener("click", startFunction);
stopButton.addEventListener("click", stopFunction);

function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

function startFunction() {
    if (!intervalID) {
        intervalID = setInterval(() => {
            color = randomColor();
            body.style.background = color;
        }, 1000);
    }
};

function stopFunction() {
    clearInterval(intervalID);
    intervalID = null;
};