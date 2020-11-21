import React, { useState, useEffect } from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const [searchField, setSearchField] = useState('');

  const handleInput = (e) => {
    setSearchField(e.target.value);
  };

  const filteredUsers = users.filter(({ name }) => name.toLowerCase().includes(`${searchField.toLowerCase()}`));

  return (
    <>
      <h1 className='title'>Robofriends</h1>
      <SearchBox handleInput={handleInput} />
      <CardList users={filteredUsers} />
    </>
  );
}

export default App;
