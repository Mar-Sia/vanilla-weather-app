function displayTemperature(response) {
  let temperatureElement = document.querySelector("#degrees");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}°`;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  console.log(response.data);

  let humidityElement = document.querySelector("#humidity");

  humidityElement.innerHTML = `${response.data.main.humidity} %`;

  let windSpeedElement = document.querySelector("#wind-speed");
  let windSpeed = Math.round(response.data.wind.speed);
  windSpeedElement.innerHTML = `${windSpeed} mph`;
}

let apiKey = "309df4d5a54300eab011fb0dc95d4919";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
