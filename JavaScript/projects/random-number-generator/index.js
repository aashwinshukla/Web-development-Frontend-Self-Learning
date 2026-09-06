const generateBtn = document.getElementById("generateBtn");
const result      = document.getElementById("result");
const errorMsg    = document.getElementById("errorMsg");

generateBtn.onclick = function() {
    const min = Number(document.getElementById("minInput").value);
    const max = Number(document.getElementById("maxInput").value);

    if (min > max) {
        errorMsg.textContent = "Min can't be greater than Max.";
        result.textContent = "";
        return;
    }

    errorMsg.textContent = "";
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = randomNum;
};
