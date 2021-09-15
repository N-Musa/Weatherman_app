async function getForecast(city) {

  const key = '';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  const res = await fetch(url);
  const weatherData = await res.json();
  console.log(weatherData);
  document.querySelector(
    ".location"
  ).innerText = `Weather in ${weatherData.name}`;
  document.querySelector(".celsius").innerText = `${Math.round(
    weatherData.main.temp
  )}°C `;
  document.querySelector('.caption').innerText = `${weatherData.weather[0].description}`
  document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  document.querySelector(
    ".wind"
  ).innerText = `Wind Speed: ${weatherData.wind.speed}`;
  document.querySelector(".vis").innerText = `Visibility: ${Math.round(
    weatherData.visibility
  )}km `;
  document.querySelector(".feel").innerText = `Feels Like: ${Math.round(
    weatherData.main.feels_like
  )}°C `;
  document.querySelector(
    ".pressure"
  ).innerText = `Pressure: ${weatherData.main.pressure}`;
  document.querySelector(
    ".humid"
  ).innerText = `Humidity: ${weatherData.main.humidity}% `;

  const button = document.querySelector(".btn");
  const input = document.querySelector(".field");
  button.addEventListener("click", () => getForecast(input.value));
  input.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      getForecast(input.value);
    }
  });
}
getForecast("Hamburg");
