// src/App.jsx
import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search Application</h1>
        <Search onSearch={(username) => console.log(`Searching for: ${username}`)} />
      </div>
    </div>
  );
};

export default App;




