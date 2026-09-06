const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn    = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel  = document.getElementById("countLabel");
let count = 0;

function updateDisplay() {
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    updateDisplay();
};

resetBtn.onclick = function() {
    count = 0;
    updateDisplay();
};

decreaseBtn.onclick = function() {
    count--;
    updateDisplay();
};
