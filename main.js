import './style.css';

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
})('berlin')

const displayForecast = (forecast) => {
  const htmlString = 
     /*    ` 
        <div class='mt-2'>
        
        <h1 class=''>City: ${forecast.name}</h1>
        <h2>Temp: ${forecast.main.temp}</h2>
        </div>
        ` */
      
      app.innerHTML = htmlString;
}
