// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  // Construct the query string for the advanced search
  let query = `user:${username}`;

  if (location) {
    query += ` location:${location}`;
  }
  
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  
  if (response.data.total_count === 0) {
    throw new Error('No users found for the given criteria.');
  }

  // Return the first user from the search results
  return response.data.items[0]; // or handle multiple results as needed
};
