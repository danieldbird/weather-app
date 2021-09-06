import axios from 'axios';
import exampleResponse from '../data/exampleResponse.json';

const liveData = true;

const getWeather = (lat, lon, unit) => {
  console.log(lat, lon);
  if (!liveData) {
    return new Promise((resolve) => {
      if (unit === 'metric') {
        resolve(exampleResponse.metric);
      } else if (unit === 'imperial') {
        resolve(exampleResponse.imperial);
      }
    });
  } else {
    const result = axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=b86fddb4f47b3946f125c5170ca25cc3`
      )
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.error('Error getting weather data from the API.');
        console.error(err);
      });
    return result;
  }
};

export default getWeather;
