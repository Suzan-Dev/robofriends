import React from 'react';
import './style.scss';

const Card = ({ name, email, website }) => (
  <div className='card-container'>
    <img src={`https://robohash.org/robot/${name}?size=200x200`} alt='robot' />
    <h2>{name}</h2>
    <p>{email}</p>
    <p>{website}</p>
  </div>
);

export default Card;
