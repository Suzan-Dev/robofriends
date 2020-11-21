import React from 'react';
import './style.scss';

const SearchBox = ({ handleInput }) => (
  <div className='searchbox-container'>
    <input type='search' onInput={handleInput} placeholder='Search robots...' />
  </div>
);

export default SearchBox;
