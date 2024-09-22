// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setLoading(true); // Set loading to true when search begins
      setError('');     // Clear any previous errors
      onSearch(searchTerm);  // Trigger search when the form is submitted
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>} {/* Display loading message */}
      {error && <p>Looks like we cant find the user</p>} {/* Display error message */}
      {/* Placeholder for user data (avatar and login) */}
      {/* These would be rendered after a successful API call in App.jsx */}
      <div>
        <h2>{searchTerm}</h2> {/* Placeholder for username */}
        <img src="" alt={searchTerm} width="100" /> {/* Placeholder for avatar_url */}
        <p><a href="#" target="_blank" rel="noopener noreferrer">View Profile</a></p> {/* Placeholder for link */}
      </div>
    </div>
  );
};

export default Search;



