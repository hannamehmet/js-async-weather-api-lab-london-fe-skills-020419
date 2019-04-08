const API_KEY = "dd218d6430791839da349261e5c449a7"



function handleFormSubmit(event) {
  event.preventDefault()
  let city = document.getElementById("city").value
  fetchCurrentWeather(city)
}


function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dd218d6430791839da349261e5c449a7`)
.then (response => response.json())
.then (json => displayCurrentWeather(json))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  document.querySelector('#temp').innerHTML = json.main.temp;
  document.querySelector('#low').innerHTML = json.main.temp_min;
  document.querySelector('#high').innerHTML = json.main.temp_max;
  document.querySelector('#humidity').innerHTML = json.main.humidity;
  document.querySelector('#cloudCover').innerHTML = json.clouds.all;
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=dd218d6430791839da349261e5c449a7`)
.then (response => response.json())
.then (json => displayFiveDayForecast(json))
  
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json)
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById('cityForm').addEventListener('submit', handleFormSubmit);
  
})
