import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      setRecipes(recipesData);
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-center mb-8">Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="card bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HomePage;