const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const axios = require('axios').default;
const express = require('express');

const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5000',
      'https://weather-app-f8952.web.app',
      'https://weather-app-f8952.firebaseapp.com',
    ],
  })
);

app.post('/getWeather', (req, res) => {
  async function getWeather(lat, lon, unit) {
    try {
      const response = await axios.post(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${
          functions.config().weatherapi.key
        }`
      );
      return response.data;
    } catch (error) {
      return 'Failed to fetch';
    }
  }
  getWeather(req.body.lat, req.body.lon, req.body.unit).then((data) => {
    res.json(data);
  });
});

exports.app = functions.https.onRequest(app);
