// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = `user:${username}`;

  if (location) {
    query += ` location:${location}`;
  }
  
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const perPage = 10; // Number of results per page
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`);
  
  if (response.data.total_count === 0) {
    throw new Error('No users found for the given criteria.');
  }

  return response.data; // Return the full response for pagination handling
};

