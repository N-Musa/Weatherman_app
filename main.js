import './style.css';

const searchBar = document.getElementById('searchBar');
const app = document.getElementById('app');

let weatherData = [];

const loadForecast = (async (city) => {
  try {
    const endpoint = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_API_TOKEN}`);
    weatherData = await endpoint.json();
    displayForecast(weatherData);
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }
})('doha')

const displayForecast = (forecast) => {
  const htmlString = `
  <div class="mt-6">
  <input type="text" id="searchBar" placeholder="Enter City..." class=" outline-black py-2 mb-6 rounded-md appearance-none w-full">
  <p>Weather in ${forecast.name}</p>

 
  <h1 class="text-8xl py-2 m-2 font-bold">${Math.round(forecast.main.temp)}&#x2103;</h1>
   <div class="flex items-center space-x-3 py-1 text-lg font-bold">
  <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png"/>
  <p>${forecast.weather[0].description}</p>
  </div>
  
    <ul class="space-y-3 mt-3">
      <li>Wind Speed:<span class="text-lg font-bold ml-2">${forecast.wind.speed}</span></li>
      <li>Visibility:<span class="text-lg font-bold ml-2">${Math.round(forecast.visibility)}km</span></li>
      <li>Feels Like:<span class="text-lg font-bold ml-2">${Math.round(forecast.main.feels_like)}&#x2103;</span></li>
      <li>Pressure:<span class="text-lg font-bold ml-2">${forecast.main.pressure}</span></li>
      <li>Humidity:<span class="text-lg font-bold ml-2">${forecast.main.humidity}&#x25;</span></li>
    </ul>
    <p class="mt-6 font-light text-xs text-blue-700">Powered by Open Weather API</p>
</div>
        `
  app.innerHTML = htmlString;
}
