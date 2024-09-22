import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
      setUsername('');  // Clear input field after search
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
