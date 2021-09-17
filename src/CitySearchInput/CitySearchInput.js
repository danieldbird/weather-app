import React, { useState } from 'react';
import Select from 'react-select';
import filterResults from './filterResults';
import { isEmpty } from '../utilities/utilities';

function CitySearchInput({ selectedCity, setSelectedCity, setPosition }) {
  const [searchResults, setSearchResults] = useState([]);

  // if there is input in the search box, filter results, otherwise clear results
  const handleSearchInput = (query) => {
    if (query) {
      setSearchResults(filterResults(query));
    } else {
      setSearchResults([]);
    }
  };

  // when a result is selected, save it in state, and clear search results
  const handleSelectCity = (city) => {
    setSearchResults([]);
    setPosition([]);
    setSelectedCity(city);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#d2dcf5',
      padding: '.5rem 0 .5rem 1rem',
      borderRadius: '1rem',
    }),
    menu: (provided, state) => ({
      ...provided,
      background: '#d2dcf5',
      color: '#333',
      borderRadius: '1rem',
    }),
    menuList: (provided, state) => ({
      ...provided,
      borderRadius: '1rem',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#333',
      '&:hover': {
        color: '#78839b',
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      background: '#78839b',
    }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      color: '#333',
    }),
  };

  return (
    <Select
      className="searchBar"
      styles={customStyles}
      placeholder="Search location..."
      options={searchResults}
      value={isEmpty(selectedCity) ? null : selectedCity}
      onInputChange={(input) => {
        handleSearchInput(input);
      }}
      onChange={(selection) => {
        handleSelectCity(selection);
      }}
      dropdownIndicator={false}
      autoFocus={true}
    />
  );
}

export default CitySearchInput;
