function createHeader() {
  // Create the header element
  const header = document.createElement("div");
  header.classList.add("header");

  // Create the location1 element
  const location1 = document.createElement("div");
  location1.classList.add("location1");

  // Create the logo element
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Weather-App";

  // Create the input element
  const input = document.createElement("div");
  input.classList.add("input");

  // Create the input field
  const inputField = document.createElement("input");
  inputField.id = "location-value";
  inputField.type = "text";
  inputField.placeholder = "Search location...";
  inputField.maxLength = "85";

  // Create the search button
  const searchBtn = document.createElement("button");
  searchBtn.classList.add("search-btn");

  // Create the search icon
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass");
  searchIcon.style.color = "#ffffff";

  // Append the search icon to the search button
  searchBtn.appendChild(searchIcon);

  // Append the input field and search button to the input element
  input.appendChild(inputField);
  input.appendChild(searchBtn);

  // Create the switch label
  const switchLabel = document.createElement("label");
  switchLabel.classList.add("switch");

  // Create the switch input
  const switchInput = document.createElement("input");
  switchInput.type = "checkbox";
  switchInput.id = "switch";

  // Create the switch span
  const switchSpan = document.createElement("span");
  switchSpan.classList.add("slider");
  switchSpan.innerHTML = "C&emsp;&ensp;F";

  // Append the switch input and span to the switch label
  switchLabel.appendChild(switchInput);
  switchLabel.appendChild(switchSpan);

  // Append the logo, input, and switch label to the location1 element
  location1.appendChild(logo);
  location1.appendChild(input);

  // Append the location1 element to the header
  header.appendChild(location1);
  header.appendChild(switchLabel);
  return header;
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("container");

  // Create the left-container element
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");

  // Create the title element
  const title = document.createElement("div");
  title.classList.add("title");

  // Create the location heading
  const locationHeading = document.createElement("h2");
  locationHeading.classList.add("location");
  locationHeading.textContent = "London";

  // Create the weather-type heading
  const weatherTypeHeading = document.createElement("h3");
  weatherTypeHeading.classList.add("weather-type");
  weatherTypeHeading.textContent = "Sunny";

  // Append the location and weather-type headings to the title element
  title.appendChild(locationHeading);
  title.appendChild(weatherTypeHeading);

  // Create the weather-div element
  const weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weather-div");

  // Create the temp-div element
  const tempDiv = document.createElement("div");
  tempDiv.classList.add("temp-div");

  // Create the weather temperature
  const weatherTemp = document.createElement("h1");
  weatherTemp.classList.add("weather-temp");
  weatherTemp.textContent = "26";

  // Create the weather temperature type
  const weatherTempType = document.createElement("h4");
  weatherTempType.classList.add("weather-temp-type");
  weatherTempType.textContent = "°C";

  // Append the weather temperature and temperature type to the temp-div element
  tempDiv.appendChild(weatherTemp);
  tempDiv.appendChild(weatherTempType);

  // Create the info-div element
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  // Create the info paragraphs
  const feelsLike = document.createElement("p");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = "Feels Like: 28 °C";

  const wind = document.createElement("p");
  wind.classList.add("wind");
  wind.textContent = "Wind: 1 m/s";

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  humidity.textContent = "Humidity: 75 %";

  const rain = document.createElement("p");
  rain.classList.add("rain");
  rain.textContent = "Rain: 0 mm";

  // Append the info paragraphs to the info-div element
  infoDiv.appendChild(feelsLike);
  infoDiv.appendChild(wind);
  infoDiv.appendChild(humidity);
  infoDiv.appendChild(rain);

  // Append the temp-div and info-div elements to the weather-div element
  weatherDiv.appendChild(tempDiv);
  weatherDiv.appendChild(infoDiv);

  // Create the right-container element
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");

  // Create the animation element
  const animation = document.createElement("div");
  animation.classList.add("animation");

  // Create the image element
  const img = document.createElement("img");
  img.classList.add("img");
  img.setAttribute("src", "./images/animated/1000.svg");

  // Append the image element to the animation element
  animation.appendChild(img);

  // Append the title, weather-div, animation to the left-container
  leftContainer.appendChild(title);
  leftContainer.appendChild(weatherDiv);

  // Append the animation element to the right-container
  rightContainer.appendChild(animation);

  // Append the left-container and right-container to the container
  container.appendChild(leftContainer);
  container.appendChild(rightContainer);

  return container;

}

function createHours() {
  // Create the hours container element
  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hours");

  // Create an array of time values
  const timeValues = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
    "06:00", "07:00", "08:00", "09:00", "10:00",
    "11:00", "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00", "20:00",
    "21:00", "22:00", "23:00"
  ];

  // Loop through the time values and create the elements for each
  timeValues.forEach((time) => {
    // Create the temp-div-mini element
    const tempDivMini = document.createElement("div");
    tempDivMini.classList.add("temp-div-mini");

    // Create the time heading
    const timeHeading = document.createElement("h4");
    timeHeading.classList.add("time");
    timeHeading.textContent = time;

    // Create the weather-temp-div-mini element
    const weatherTempDivMini = document.createElement("div");
    weatherTempDivMini.classList.add("weather-temp-div-mini");

    // Create the weather temperature
    const weatherTempMini = document.createElement("h5");
    weatherTempMini.classList.add("weather-temp-mini");
    weatherTempMini.textContent = "26"; // You can set the actual temperature here

    // Create the weather temperature type
    const weatherTempTypeMini = document.createElement("h6");
    weatherTempTypeMini.classList.add("weather-temp-type-mini");
    weatherTempTypeMini.textContent = "°C";

    // Append the weather temperature and temperature type to the weather-temp-div-mini element
    weatherTempDivMini.appendChild(weatherTempMini);
    weatherTempDivMini.appendChild(weatherTempTypeMini);

    // Create the image element
    const imgMini = document.createElement("img");
    imgMini.classList.add("img-mini");
    imgMini.setAttribute("src", "./images/animated/1003.svg"); // Set the correct image source

    // Append the time heading, weather-temp-div-mini, and image to the temp-div-mini element
    tempDivMini.appendChild(timeHeading);
    tempDivMini.appendChild(weatherTempDivMini);
    tempDivMini.appendChild(imgMini);

    // Append the temp-div-mini element to the hours container
    hoursContainer.appendChild(tempDivMini);
  });

  return hoursContainer;

}

function createDays() {

    // Create the days container element
  const daysContainer = document.createElement("div");
  daysContainer.classList.add("days");

  // Create an array of data for the days
  const daysData = [
    {
      date: "Today",
      weatherIcon: "./images/animated/sun.svg",
      temperature: "26",
      weatherType: "°C",
      wind: "Wind: 1 m/s",
      humidity: "Humidity: 75 %",
      rain: "Rain: 0 %",
    },
    {
      date: "Today",
      weatherIcon: "./images/animated/day.svg",
      temperature: "26",
      weatherType: "°C",
      wind: "Wind: 1 m/s",
      humidity: "Humidity: 75 %",
      rain: "Rain: 0 %",
    },
    {
      date: "Today",
      weatherIcon: "./images/animated/day.svg",
      temperature: "26",
      weatherType: "°C",
      wind: "Wind: 1 m/s",
      humidity: "Humidity: 75 %",
      rain: "Rain: 0 %",
    },
  ];

  // Loop through the days data and create the elements for each day
  daysData.forEach((dayData) => {
    // Create the day element
    const day = document.createElement("div");
    day.classList.add("day");

    // Create the mini-title element
    const miniTitle = document.createElement("div");
    miniTitle.classList.add("mini-title");

    // Create the date heading
    const dateHeading = document.createElement("h4");
    dateHeading.classList.add("date");
    dateHeading.textContent = dayData.date;

    // Create the weather icon image
    const weatherIconImg = document.createElement("img");
    weatherIconImg.classList.add("img-day");
    weatherIconImg.setAttribute("src", dayData.weatherIcon);

    // Append the date heading and weather icon to the mini-title element
    miniTitle.appendChild(dateHeading);
    miniTitle.appendChild(weatherIconImg);

    // Create the weather-temp-div-mini element
    const weatherTempDivMini = document.createElement("div");
    weatherTempDivMini.classList.add("weather-temp-div-mini");

    // Create the temp-day-div-mini element
    const tempDayDivMini = document.createElement("div");
    tempDayDivMini.classList.add("temp-day-div-mini");

    // Create the weather temperature
    const weatherTempDay = document.createElement("h5");
    weatherTempDay.classList.add("weather-temp-day");
    weatherTempDay.textContent = dayData.temperature;

    // Create the weather temperature type
    const weatherTempTypeMini = document.createElement("h6");
    weatherTempTypeMini.classList.add("weather-temp-type-mini");
    weatherTempTypeMini.textContent = dayData.weatherType;

    // Append the weather temperature and temperature type to the temp-day-div-mini element
    tempDayDivMini.appendChild(weatherTempDay);
    tempDayDivMini.appendChild(weatherTempTypeMini);

    // Create the info-mini element
    const infoMini = document.createElement("div");
    infoMini.classList.add("info-mini");

    // Create the wind, humidity, and rain paragraphs
    const windDay = document.createElement("p");
    windDay.classList.add("wind-day");
    windDay.textContent = dayData.wind;

    const humidityDay = document.createElement("p");
    humidityDay.classList.add("humidity-day");
    humidityDay.textContent = dayData.humidity;

    const rainDay = document.createElement("p");
    rainDay.classList.add("rain-day");
    rainDay.textContent = dayData.rain;

    // Append the wind, humidity, and rain paragraphs to the info-mini element
    infoMini.appendChild(windDay);
    infoMini.appendChild(humidityDay);
    infoMini.appendChild(rainDay);

    // Append the mini-title and weather-temp-div-mini elements to the day element
    day.appendChild(miniTitle);
    weatherTempDivMini.appendChild(tempDayDivMini);
    weatherTempDivMini.appendChild(infoMini);
    day.appendChild(weatherTempDivMini);

    // Append the day element to the days container
    daysContainer.appendChild(day);
  });

  return daysContainer;

}

function createFooter() {

    // Create the footer element
  const footer = document.createElement("footer");

  // Create the span element
  const span = document.createElement("span");

  // Set the text content of the span
  span.textContent = "@ Copyright Elliot Nykvist";

  // Append the span element to the footer
  footer.appendChild(span);

  return footer;
  
}


function createDom() {
  const wrapper = document.querySelector(".wrapper");

  wrapper.appendChild(createHeader());
  wrapper.appendChild(createContainer());
  wrapper.appendChild(createHours());
  wrapper.appendChild(createDays());
  wrapper.appendChild(createFooter());

}


createDom();

  const myApi = "984f37a3d7f842c6ad8131427233110";
  const input = document.getElementById("location-value");
  const btn = document.querySelector(".search-btn");
  const tempMini = document.querySelectorAll(".weather-temp-mini");
  const imgMini  = document.querySelectorAll(".img-mini");
  const imgMiniDay = document.querySelectorAll(".img-day");
  const infoMini = document.querySelectorAll(".info-mini");
  const titleDay = document.querySelectorAll(".date");
  const tempDay = document.querySelectorAll(".weather-temp-day");
  const typeDay = document.querySelectorAll(".weather-temp-type-mini");
  const switchCheck = document.getElementById("switch");
  const location1 = document.querySelector(".location");
  let locationName = location1.textContent;
  


  async function getWeatherData() {
    let weatherData;
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${myApi}&q=${locationName}`, {mode: 'cors'});
      weatherData = await response.json();
    } catch (error) {
      console.log(error);
    }
  
    const location = weatherData.location.name;
    const condition = weatherData.current.condition.text
    document.querySelector(".weather-type").innerHTML = condition;
    location1.innerHTML = location;
  
  
    if (switchCheck.checked === true) {
  
      const temperatureF = Math.round(weatherData.current.temp_f);
      document.querySelector(".weather-temp").innerHTML = temperatureF;
      document.querySelector(".weather-temp-type").innerHTML = "°F";
  
      const feelsLike = weatherData.current.feelslike_f;
      const wind = weatherData.current.wind_mph;
      const rainData = weatherData.current.precip_in;
  
      document.querySelector(".feels-like").innerHTML = `Feels Like: ${feelsLike} °F`;
      document.querySelector(".wind").innerHTML = `Wind: ${wind} mph`;
      document.querySelector(".rain").innerHTML = `Rain: ${rainData} in`;
  
    } else {
      const temperatureC = weatherData.current.temp_c;
      document.querySelector(".weather-temp").innerHTML = temperatureC;
      document.querySelector(".weather-temp-type").innerHTML = "°C"
  
      const feelsLike = weatherData.current.feelslike_c;
      const wind = Math.round(weatherData.current.wind_kph/3.6);
      const rainData = weatherData.current.precip_mm;
  
      document.querySelector(".feels-like").innerHTML = `Feels Like: ${feelsLike} °C`;
      document.querySelector(".wind").innerHTML = `Wind: ${wind} m/s`;
      document.querySelector(".rain").innerHTML = `Rain: ${rainData} mm`;
  
    };
  
    const humidityData = weatherData.current.humidity;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidityData} %`;
  
    const imgCode = weatherData.current.condition.code;
  
    document.querySelector(".img").src = `./images/animated/${imgCode}.svg`;
  
  }
  



  async function getFutureData() {

    let futureData;
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApi}&q=${locationName}&days=3`, {mode: 'cors'});
      futureData = await response.json();
    } catch (error) {
      console.log(error);
    }

    
  
    const future = futureData.forecast.forecastday;
  
  
    if (switchCheck.checked === true) {
  
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
      
      tempDay.forEach((temp, index) => {
        const temperature = Math.round(future[index].day.avgtemp_f);
        // eslint-disable-next-line no-param-reassign
        temp.innerHTML = temperature;
      });
      
      typeDay.forEach((type) => {
        // eslint-disable-next-line no-param-reassign
        type.innerHTML = "°F";
      });
      
  
    } else {
  
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
  
          tempDay.forEach((temp, index) => {
            const temperature = Math.round(future[index].day.avgtemp_c);
            // eslint-disable-next-line no-param-reassign
            temp.innerHTML = temperature;
          });
        
          typeDay.forEach((type) => {
            // eslint-disable-next-line no-param-reassign
            type.innerHTML = "°C";
        });
      
  
    }
  
    imgMiniDay.forEach((img, index) => {
      // eslint-disable-next-line no-param-reassign
      img.src = future[index].day.condition.icon;
    
    });
  
    titleDay.forEach((title, index) => {
      // eslint-disable-next-line no-param-reassign
      title.innerHTML = future[index].date;
        
    })
  
  }

  async function getForecastData() {

    let forecastData;
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myApi}&q=${locationName}`, { mode: 'cors' });
      forecastData = await response.json();
      // Process your forecastData here
    } catch (error) {
      console.log(error);
    }

    const foreCast = forecastData.forecast.forecastday[0].hour;

    console.log(foreCast)

    imgMini.forEach((img, index) => {
      // eslint-disable-next-line no-param-reassign
      img.src = foreCast[index].condition.icon
    });

    if (switchCheck.checked === true) {

      tempMini.forEach((element, index) => {
        // eslint-disable-next-line no-param-reassign
        element.innerHTML = Math.round(foreCast[index].temp_f)
      });

    } else {

        tempMini.forEach((element, index) => {
          // eslint-disable-next-line no-param-reassign
          element.innerHTML = Math.round(foreCast[index].temp_c);
        });
      }
  }

  switchCheck.addEventListener("change", () => {
    if (switchCheck.checked) {
      getWeatherData(locationName);
      getFutureData(locationName);
      getForecastData(locationName);
    } else {
      getWeatherData(locationName);
      getFutureData(locationName);
      getForecastData(locationName);
    }
  });

  getWeatherData(locationName);
  getFutureData(locationName);
  getForecastData(locationName);

  
  function buttonEvent() {
    btn.addEventListener('click', () => {
      locationName = input.value;
      getWeatherData(locationName);
      getFutureData(locationName);
      getForecastData(locationName);
      input.value = "";
    });
  }

  buttonEvent();

  








