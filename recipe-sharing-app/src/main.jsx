import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

// Create the root element for ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      <Route path="/favorites" element={<FavoritesList />} />
      <Route path="/recommendations" element={<RecommendationsList />} />
    </Routes>
  </BrowserRouter>
);