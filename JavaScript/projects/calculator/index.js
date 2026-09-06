const display      = document.getElementById("display");
const clearBtn     = document.getElementById("clearBtn");
const backspaceBtn = document.getElementById("backspaceBtn");
const equalsBtn    = document.getElementById("equalsBtn");
const buttons      = document.querySelectorAll(".btn");

let expression = "";

function updateDisplay(value) {
    display.textContent = value === "" ? "0" : value;
}

buttons.forEach(btn => {
    if (btn.dataset.value !== undefined) {
        btn.onclick = function() {
            if (btn.dataset.value === ".") {
                const parts = expression.split(/[\+\-\*\/\%]/);
                const lastPart = parts[parts.length - 1];
                if (lastPart.includes(".")) return;
            }

            if (["/", "*", "%"].includes(btn.dataset.value) && expression === "") return;

            expression += btn.dataset.value;
            updateDisplay(expression);
        };
    }
});

clearBtn.onclick = function() {
    expression = "";
    updateDisplay("");
};

backspaceBtn.onclick = function() {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
};

equalsBtn.onclick = function() {
    if (expression === "") return;

    try {
        const result = Function(`"use strict"; return (${expression})`)();

        if (!isFinite(result)) {
            throw new Error("Cannot divide by zero");
        }

        expression = String(result);
        updateDisplay(expression);
    } catch (error) {
        display.textContent = "Error";
        expression = "";
    }
};
