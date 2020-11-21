import React, { useState, useEffect } from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';
import Loader from './components/loader/loader';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, 2000);
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
      {filteredUsers.length ? <CardList users={filteredUsers} /> : <Loader />}
    </>
  );
}

export default App;
