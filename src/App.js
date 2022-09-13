import React, { useState } from 'react';
import './App.css';

const App = () => {

  // city
  const [city, setCity] = useState("Surrey");
  // temperature
  let [temperature, setTemperature] = useState(0);
  // weather
  let [weather, setWeather] = useState("");
  // weather icon
  let [icon, setIcon] = useState("");

  // get data from api
  const getForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY }&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTemperature(temperature = data.main.temp);
        setWeather(weather = data.weather[0].description);
        setIcon(icon = data.weather[0].icon);
      });
  }

  // handle the user input
  const cityChange = (e) => {
    setCity(e.target.value);
  }

  return (
    <div className="App">
      <>{city==="Surrey" ? getForecast() : null}</>
      <div className="search">
        <input type="text" id="usr-search" placeholder='Enter a City...' value={city} onChange={cityChange} />
        <button id="search-btn" onClick={getForecast}>Search</button>
      </div>
      <div className="current-weather">
        <div className="weather-info">
          <img src={` http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <p>Today</p>
          <h1>{city}</h1>
          <p>Temperature: {Math.floor(temperature)}°</p>
          <p>{weather}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
