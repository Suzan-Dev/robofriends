import React from 'react';
import './style.scss';

import Card from '../card/card';

const CardList = ({ users }) => (
  <div className='cardlist-container'>
    {users.map(({ id, ...otherProps }) => (
      <Card key={id} {...otherProps} />
    ))}
  </div>
);

export default CardList;
