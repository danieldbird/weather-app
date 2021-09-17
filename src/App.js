import React, { useState } from 'react';
import CitySearchInput from './CitySearchInput/CitySearchInput';
import LocationButton from './LocationButton/LocationButton';
import UnitSelection from './UnitSelection/UnitSelection';
import Weather from './Weather/Weather';
import './App.scss';

function App() {
  const [selectedCity, setSelectedCity] = useState({});
  const [position, setPosition] = useState([]);
  const [unit, setUnit] = useState('metric');

  return (
    <div className="container">
      <div className="searchContainer">
        <CitySearchInput
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setPosition={setPosition}
        />
        <LocationButton setSelectedCity={setSelectedCity} setPosition={setPosition} />
        <UnitSelection unit={unit} setUnit={setUnit} />
      </div>
      <Weather selectedCity={selectedCity} unit={unit} position={position} />
    </div>
  );
}

export default App;
