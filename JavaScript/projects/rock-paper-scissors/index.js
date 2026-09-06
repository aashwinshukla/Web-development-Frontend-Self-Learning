const choices         = ["rock", "paper", "scissors"];
const choiceBtns      = document.querySelectorAll(".choice-btn");
const playerChoiceEl  = document.getElementById("playerChoice");
const computerChoiceEl= document.getElementById("computerChoice");
const outcomeEl       = document.getElementById("outcome");
const playerScoreEl   = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const drawScoreEl     = document.getElementById("drawScore");
const resetBtn        = document.getElementById("resetBtn");

let playerScore   = 0;
let computerScore = 0;
let drawScore     = 0;

const wins = {
    rock:     "scissors",
    paper:    "rock",
    scissors: "paper"
};

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getOutcome(player, computer) {
    if (player === computer)       return "draw";
    if (wins[player] === computer) return "win";
    return "lose";
}

function updateScore(outcome) {
    if (outcome === "win")       playerScore++;
    else if (outcome === "lose") computerScore++;
    else                         drawScore++;

    playerScoreEl.textContent   = playerScore;
    computerScoreEl.textContent = computerScore;
    drawScoreEl.textContent     = drawScore;
}

function updateDisplay(player, computer, outcome) {
    const emoji = { rock: "🪨", paper: "📄", scissors: "✂️" };

    playerChoiceEl.textContent   = `Player: ${emoji[player]} ${player}`;
    computerChoiceEl.textContent = `Computer: ${emoji[computer]} ${computer}`;

    outcomeEl.classList.remove("win", "lose", "draw");
    outcomeEl.classList.add(outcome);

    if (outcome === "win")       outcomeEl.textContent = "You Win! 🎉";
    else if (outcome === "lose") outcomeEl.textContent = "You Lose! 💀";
    else                         outcomeEl.textContent = "Draw! 🤝";
}

choiceBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const playerChoice   = btn.dataset.choice;
        const computerChoice = getComputerChoice();
        const outcome        = getOutcome(playerChoice, computerChoice);

        choiceBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        updateDisplay(playerChoice, computerChoice, outcome);
        updateScore(outcome);
    });
});

resetBtn.addEventListener("click", function() {
    playerScore = computerScore = drawScore = 0;

    playerScoreEl.textContent   = 0;
    computerScoreEl.textContent = 0;
    drawScoreEl.textContent     = 0;

    playerChoiceEl.textContent   = "Player: —";
    computerChoiceEl.textContent = "Computer: —";
    outcomeEl.textContent        = "";
    outcomeEl.classList.remove("win", "lose", "draw");
    choiceBtns.forEach(b => b.classList.remove("selected"));
});
