const myApi = "984f37a3d7f842c6ad8131427233110";
const input = document.getElementById("location-value");
const btn = document.querySelector(".search-btn");


async function getWeatherData() {
  const inputValue = input.value;
  const response = await fetch(`https://api.weatherapi.com/v1/forcast.json?key=${myApi}&q=${inputValue}`, {mode: 'cors'});
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


  

 
  console.log(location);
  console.log(weatherData);

  return weatherData;
}




btn.addEventListener('click', () => {
  getWeatherData();
})




