import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the landing page of the application.</p>
      <Link to="/profile">Go to Profile</Link> {/* Add this link */}
    </div>
  );
}

export default Home;