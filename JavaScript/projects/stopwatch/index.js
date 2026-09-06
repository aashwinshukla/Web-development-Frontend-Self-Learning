const display  = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn  = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let interval    = null;
let elapsedTime = 0;
let startTime   = 0;

function updateDisplay() {
    const hours   = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.onclick = function() {
    if (interval) return;
    startTime = Date.now() - elapsedTime;
    interval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 1000);
};

stopBtn.onclick = function() {
    clearInterval(interval);
    interval = null;
};

resetBtn.onclick = function() {
    clearInterval(interval);
    interval    = null;
    elapsedTime = 0;
    startTime   = 0;
    updateDisplay();
};
