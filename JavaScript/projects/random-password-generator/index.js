const generateBtn    = document.getElementById("generateBtn");
const result         = document.getElementById("result");
const errorMsg       = document.getElementById("errorMsg");

const upper   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower   = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

generateBtn.onclick = function() {
    const length         = Number(document.getElementById("lengthInput").value);
    const includeUpper   = document.getElementById("includeUpper").checked;
    const includeLower   = document.getElementById("includeLower").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    if (!includeUpper && !includeLower && !includeNumbers && !includeSymbols) {
        errorMsg.textContent = "Please select at least one character type.";
        result.textContent = "";
        return;
    }

    errorMsg.textContent = "";

    let charPool = "";
    if (includeUpper)   charPool += upper;
    if (includeLower)   charPool += lower;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    result.textContent = password;
};
