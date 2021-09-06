import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

function GetPositionButton({ setSelectedCity, setPosition }) {
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      setSelectedCity({});
      setPosition([position.coords.latitude, position.coords.longitude]);
    }
  };
  return (
    <button className="locationButton" onClick={getPosition}>
      <FontAwesomeIcon icon={faLocationArrow} />
    </button>
  );
}

export default GetPositionButton;
