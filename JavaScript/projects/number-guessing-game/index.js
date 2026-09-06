const guessBtn   = document.getElementById("guessBtn");
const resetBtn   = document.getElementById("resetBtn");
const guessInput = document.getElementById("guessInput");
const result     = document.getElementById("result");
const attempts   = document.getElementById("attempts");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;
let gameOver     = false;

guessBtn.onclick = function() {
    if (gameOver) {
        result.textContent = "Game over. Click New Game to play again.";
        return;
    }

    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptCount++;
    attempts.textContent = `Attempts: ${attemptCount}`;

    if (guess === secretNumber) {
        result.textContent = `Correct! You got it in ${attemptCount} attempt(s)!`;
        result.style.color = "#00ff99";
        gameOver = true;
    } else if (guess < secretNumber) {
        result.textContent = "Too low — try higher.";
        result.style.color = "#f5a623";
    } else {
        result.textContent = "Too high — try lower.";
        result.style.color = "#e94560";
    }

    guessInput.value = "";
};

resetBtn.onclick = function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    gameOver     = false;
    result.textContent   = "";
    attempts.textContent = "";
    guessInput.value     = "";
    result.style.color   = "#00ff99";
};
