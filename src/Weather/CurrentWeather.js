import React from 'react';
import symbol from '../utilities/getSymbol';
import getTime from '../utilities/getTime';
import getWindDirection from '../utilities/getWindDirection';

function CurrentWeather({ weatherData, unit, selectedCity }) {
  return (
    <div className="current">
      <div className="grid">
        <h1 className="name">{selectedCity.name ? selectedCity.name : 'Current Location'}</h1>
        <div className="icon">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}
            alt="weather icon"
          />
        </div>
        <div className="temp">{weatherData.current.temp.toFixed(0) + symbol(unit).temp}</div>
        <div className="min">{weatherData.daily[0].temp.min.toFixed(0) + symbol(unit).temp}</div>
        <div className="max">{weatherData.daily[0].temp.max.toFixed(0) + symbol(unit).temp}</div>
        <div className="feels-like">
          Feels like: {weatherData.current.feels_like.toFixed(0) + symbol(unit).temp}
        </div>
        <div className="description">
          {weatherData.current.weather[0].description[0].toUpperCase() +
            weatherData.current.weather[0].description.slice(1) +
            '.'}
        </div>
      </div>
      <div className="stats">
        <div className="statsLeft">
          <p>Wind Speed: {weatherData.current.wind_speed.toFixed() + symbol(unit).wind}</p>
          <p>Humidity: {weatherData.current.humidity + symbol(unit).percentage}</p>
          <p>Sunrise: {getTime(weatherData.current.sunrise, weatherData.timezone_offset)}</p>
        </div>
        <div className="statsRight">
          <p>Wind Direction: {getWindDirection(weatherData.current.wind_deg)}</p>
          <p>Pressure: {weatherData.current.pressure + symbol(unit).pressure}</p>
          <p>Sunset: {getTime(weatherData.current.sunset, weatherData.timezone_offset)}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
