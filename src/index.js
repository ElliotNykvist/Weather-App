const myApi = "984f37a3d7f842c6ad8131427233110";
const input = document.getElementById("location-value");
const btn = document.querySelector(".search-btn");
const tempMini = document.querySelectorAll(".weather-temp-mini");
const imgMini  = document.querySelectorAll(".img-mini");
const imgMiniDay = document.querySelectorAll(".img-day");
const infoMini = document.querySelectorAll(".info-mini");
const titleDay = document.querySelectorAll(".date");
const tempDay = document.querySelectorAll(".weather-temp-day");
const switchCheck = document.getElementById("switch");



async function getWeatherCelsiusData() {
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
  const wind = Math.round(weatherData.current.wind_kph/3.6);
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


async function getFutureCelsiusData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApi}&q=${inputValue}&days=3`, {mode: 'cors'});
  const futureData = await response.json();

  const future = futureData.forecast.forecastday;
  console.log(future);

  infoMini.forEach((info, index) => {

    const wind = Math.round(future[index].day.avgvis_km/3.6);
    const humidityData = future[index].day.avghumidity;
    const rainData = future[index].day.totalprecip_mm;

    const windElement = info.querySelector(".info-mini .wind-day");
    const humidityElement = info.querySelector(".info-mini .humidity-day");
    const rainElement = info.querySelector(".info-mini .rain-day");

    windElement.innerHTML = `Wind: ${wind} m/s`;
    humidityElement.innerHTML = `Humidity: ${humidityData} %`;
    rainElement.innerHTML = `Rain: ${rainData} mm`;
  
    })

  imgMiniDay.forEach((img, index) => {
    // eslint-disable-next-line no-param-reassign
    img.src = future[index].day.condition.icon;
  
  });

  titleDay.forEach((title, index) => {
    // eslint-disable-next-line no-param-reassign
    title.innerHTML = future[index].date;
      
  })

 tempDay.forEach((temp, index) => {
    const temperature = future[index].day.avgtemp_c;
    // eslint-disable-next-line no-param-reassign
    temp.innerHTML = temperature;
  });


  


}


async function getForcastCelsiusData() {
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

async function getWeatherFahrenheitData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${myApi}&q=${inputValue}`, {mode: 'cors'});
  const  weatherData = await response.json();

  const location = weatherData.location.name;
  const type = weatherData.current.condition.text;
  const temperature = weatherData.current.temp_f;
  document.querySelector(".location").innerHTML = location;
  document.querySelector(".weather-type").innerHTML = type;
  document.querySelector(".weather-temp").innerHTML = temperature;

  // info

  const feelsLike = weatherData.current.feelslike_f;
  const wind = weatherData.current.wind_miles;
  const humidityData = weatherData.current.humidity;
  const rainData = weatherData.current.precip_in;

  document.querySelector(".feels-like").innerHTML = `Feels Like: ${feelsLike} °F`;
  document.querySelector(".wind").innerHTML = `Wind: ${wind} m/s`;
  document.querySelector(".humidity").innerHTML = `Humidity: ${humidityData} %`;
  document.querySelector(".rain").innerHTML = `Rain: ${rainData} in`;

  const imgCode = weatherData.current.condition.code;

  document.querySelector(".img").src = `./images/animated/${imgCode}.svg`;


  

 /*
  console.log(location);
  console.log(weatherData);
*/

  return weatherData;
}


async function getFutureFahrenheitData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApi}&q=${inputValue}&days=3`, {mode: 'cors'});
  const futureData = await response.json();

  const future = futureData.forecast.forecastday;
  console.log(future);

  infoMini.forEach((info, index) => {

    const wind = future[index].day.avgvis_miles;
    const humidityData = future[index].day.avghumidity;
    const rainData = future[index].day.totalprecip_in;

    const windElement = info.querySelector(".info-mini .wind-day");
    const humidityElement = info.querySelector(".info-mini .humidity-day");
    const rainElement = info.querySelector(".info-mini .rain-day");

    windElement.innerHTML = `Wind: ${wind} mph`;
    humidityElement.innerHTML = `Humidity: ${humidityData} %`;
    rainElement.innerHTML = `Rain: ${rainData} in`;
  
    })

  imgMiniDay.forEach((img, index) => {
    // eslint-disable-next-line no-param-reassign
    img.src = future[index].day.condition.icon;
  
  });

  titleDay.forEach((title, index) => {
    // eslint-disable-next-line no-param-reassign
    title.innerHTML = future[index].date;
      
  })

 tempDay.forEach((temp, index) => {
    const temperature = future[index].day.avgtemp_f;
    // eslint-disable-next-line no-param-reassign
    temp.innerHTML = temperature;
  });


  


}


async function getForcastFahrenheitData() {
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
    element.innerHTML = foreCast[index].temp_f;});

}

function controlSwitch() {


  if (switchCheck.checked === true) {

    getWeatherFahrenheitData();
    getFutureFahrenheitData();
    getForcastFahrenheitData();

  } else {

    getWeatherCelsiusData();
    getFutureCelsiusData();
    getForcastCelsiusData();

  };

}






btn.addEventListener('click', () => {

  controlSwitch();
  input.value = "";

});




