const myApi = "984f37a3d7f842c6ad8131427233110";
const input = document.getElementById("location-value");
const btn = document.querySelector(".search-btn");
const tempMini = document.querySelectorAll(".weather-temp-mini");
const imgMini  = document.querySelectorAll(".img-mini");
const imgMiniDay = document.querySelectorAll(".img-day");


async function getWeatherData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${myApi}&q=${inputValue}`, {mode: 'cors'});
  const  weatherData = await response.json();

  const location = weatherData.location.name;
  const type = weatherData.current.condition.text
  const temperature = weatherData.current.temp_c;
  document.querySelector(".location").innerHTML = location;
  document.querySelector(".weather-type").innerHTML = type;
  document.querySelector(".weather-temp").innerHTML = temperature;

  // info

  const feelsLike = weatherData.current.feelslike_c;
  const wind = weatherData.current.wind_kph;
  const humidityData = weatherData.current.humidity;
  const rainData = weatherData.current.precip_mm;

  document.querySelector(".feels-like").innerHTML = `Feels Like: ${feelsLike} °C`;
  document.querySelector(".wind").innerHTML = `Wind: ${wind} m/s`;
  document.querySelector(".humidity").innerHTML = `Humidity: ${humidityData} %`;
  document.querySelector(".rain").innerHTML = `Rain: ${rainData} mm`;

  const imgCode = weatherData.current.condition.code;

  document.querySelector(".img").src = `./images/animated/${imgCode}.svg`;


  

 /*
  console.log(location);
  console.log(weatherData);
*/

  return weatherData;
}


async function getFutureData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApi}&q=${inputValue}&days=3`, {mode: 'cors'});
  const  futureData = await response.json();

  const future = futureData.forecast.forcastday;

  imgMiniDay.forEach((img, index) => {
    // eslint-disable-next-line no-param-reassign
    img.src = future[index].condition.icon;

   });

  

  console.log(futureData);
}


async function getForcastData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApi}&q=${inputValue}`, {mode: 'cors'});
  const  forecastData = await response.json();

  const foreCast = forecastData.forecast.forecastday[0].hour;

  console.log(foreCast)

  imgMini.forEach((img, index) => {
    // eslint-disable-next-line no-param-reassign
    img.src = foreCast[index].condition.icon
   });

  tempMini.forEach((element, index) => {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = foreCast[index].temp_c;});

}


btn.addEventListener('click', () => {
  
  getWeatherData();
  getForcastData();
  getFutureData();
  input.value = "";

})




