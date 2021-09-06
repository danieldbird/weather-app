import React from 'react';
import getDate from '../utilities/getDate';
import symbol from '../utilities/getSymbol';
function ForecastedWeather({ forecast, unit }) {
  return (
    <div className="forecast">
      {forecast.map((day, index) => {
        return (
          <div key={index} className="day">
            <div className="date">{getDate(day.dt)}</div>
            <div className="icon">
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
            <div className="tempGrid">
              <div className="temp">{day.temp.day.toFixed(0) + symbol(unit).temp}</div>
              <div className="max">{day.temp.max.toFixed(0) + symbol(unit).temp}</div>
              <div className="min">{day.temp.min.toFixed(0) + symbol(unit).temp}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastedWeather;
