// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API function

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null); // State for user data

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setLoading(true); // Set loading to true when search begins
      setError('');     // Clear any previous errors
      try {
        const data = await fetchUserData(searchTerm); // Call the fetch function
        setUserData(data); // Set user data if successful
        onSearch(searchTerm);  // Trigger search action
      } catch (err) {
        setError('Looks like we cant find the user'); // Set error if user not found
      } finally {
        setLoading(false); // Set loading to false when API call finishes
      }
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
      {error && <p>{error}</p>} {/* Display error message */}
      {userData && (
        <div>
          <h2>{userData.login}</h2> {/* Display user login */}
          <img src={userData.avatar_url} alt={userData.login} width="100" /> {/* Display avatar */}
          <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p> {/* Profile link */}
        </div>
      )}
    </div>
  );
};

export default Search;




