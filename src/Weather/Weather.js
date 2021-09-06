import React, { useState, useEffect } from 'react';
import isEmpty from '../utilities/utilities';
import getWeather from './getWeather';
import CurrentWeather from './CurrentWeather';
import ForecastedWeather from './ForecastedWeather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Weather({ selectedCity, unit, position }) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if (!isEmpty(selectedCity) || position.length) {
      let lat;
      let lon;

      if (position.length) {
        lat = position[0];
        lon = position[1];
      }

      if (!isEmpty(selectedCity)) {
        lat = selectedCity.coord.lat;
        lon = selectedCity.coord.lon;
      }

      getWeather(lat, lon, unit)
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedCity, unit, position]);

  return !isEmpty(weatherData) ? (
    <div className="weather">
      <CurrentWeather weatherData={weatherData} unit={unit} selectedCity={selectedCity} />
      <ForecastedWeather forecast={weatherData.daily.slice(1, -3)} unit={unit} />
    </div>
  ) : (
    <div className="no-weather">
      <span className="pointing-arrow">
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
      Select a location..
    </div>
  );
}

export default Weather;
