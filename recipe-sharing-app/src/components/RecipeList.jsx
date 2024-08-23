import React from 'react';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  // Ensure filtering is applied if search term is set
  const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <SearchBar />
      {recipesToDisplay.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;