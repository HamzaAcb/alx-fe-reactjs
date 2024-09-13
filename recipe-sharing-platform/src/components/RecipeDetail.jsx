import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetails = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(recipeDetails);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Recipe Title */}
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      
      {/* Recipe Image */}
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      
      {/* Recipe Summary */}
      <p className="text-lg mb-4">{recipe.summary}</p>
      
      {/* Ingredients Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      {/* Cooking Instructions Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;

