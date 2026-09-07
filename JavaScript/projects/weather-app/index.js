const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const display = document.querySelector(".display");
const apiKey = "2abbd2c83aaa41bb1ab482abe3d279e0";

weatherForm.addEventListener("submit", event =>{
    
    event.preventDefault();

    const city = cityInput.value;
    
    if(city){

    }else{
        displayError();
        
    }
});


async function getWeatherData(city){

}

function getWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

} 
