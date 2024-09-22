import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSearch = async (username) => {
    setLoading(true);  // Set loading to true when search begins
    setError('');      // Clear any previous errors
    setUserData(null); // Clear previous user data
    try {
      const data = await fetchUserData(username);  // Fetch user data
      setUserData(data);  // Set user data if successful
      setError('');
    } catch (err) {
      setError('Looks like we cant find the user');  // Set error if the user is not found
    } finally {
      setLoading(false);  // Set loading to false when API call finishes
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {/* Conditional rendering for loading, error, and user data */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name || userData.login}</h2> {/* Display name or login if name is unavailable */}
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default App;




