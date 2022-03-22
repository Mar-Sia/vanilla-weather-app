function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "309df4d5a54300eab011fb0dc95d4919";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
