// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1); // Reset to the first page
    if (username.trim()) {
      setLoading(true);
      setError('');
      try {
        const data = await fetchUserData(username, location, minRepos, 1); // Fetch first page
        setUserData(data.items);
        setHasMore(data.total_count > 10); // Check if there are more results
        onSearch(username);
      } catch (err) {
        setError('Looks like we cant find the user');
      } finally {
        setLoading(false);
      }
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchUserData(username, location, minRepos, nextPage); // Fetch next page
      setUserData((prev) => [...prev, ...data.items]);
      setPage(nextPage);
      setHasMore(data.total_count > nextPage * 10); // Update if there are more results
    } catch (err) {
      setError('Failed to load more results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Search
        </button>
      </form>
      {loading && <p className="mt-2 text-gray-500">Loading...</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4">
          {userData.map(user => (
            <div key={user.id} className="border-b py-2">
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <img src={user.avatar_url} alt={user.login} width="100" className="rounded" />
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos}</p>
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </p>
            </div>
          ))}
          {hasMore && (
            <button onClick={loadMore} className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;





