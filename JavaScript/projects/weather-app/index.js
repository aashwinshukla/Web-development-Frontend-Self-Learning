const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "2abbd2c83aaa41bb1ab482abe3d279e0";

weatherForm.addEventListener("submit", event =>{
    
    event.preventDefault();

    const city = cityInput.value;
    
    if(city){

    }else{
        displayError("Please Enter a city");

    }
});


async function getWeatherData(city){

}

function getWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errprDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
} 
