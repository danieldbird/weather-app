import exampleResponse from '../data/exampleResponse.json';
import { isDev } from '../utilities/utilities';

const liveData = true;

let url;
if (isDev()) {
  url = 'http://localhost:5001/weather-app-f8952/us-central1/app/getWeather';
} else {
  url = 'https://us-central1-weather-app-f8952.cloudfunctions.net/app/getWeather';
}

const getSampleData = (unit) =>
  new Promise((resolve) => {
    if (unit === 'metric') {
      resolve(exampleResponse.metric);
    } else if (unit === 'imperial') {
      resolve(exampleResponse.imperial);
    }
  });

const getWeatherData = async (lat, lon, unit) => {
  const data = JSON.stringify({ lat, lon, unit });
  const res = await fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const weather = await res.json();
  console.log(weather);
  return weather;
};

const getWeather = (lat, lon, unit) => {
  if (!liveData) {
    return getSampleData(unit);
  } else {
    return getWeatherData(lat, lon, unit);
  }
};

export default getWeather;
