import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!title || !ingredients || !steps) {
      setErrorMessage("All fields are required");
      return;
    }

    // Ingredients must have at least two items
    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
      setErrorMessage("Please include at least two ingredients.");
      return;
    }

    // If form is valid, clear error message
    setErrorMessage("");

    // Add logic to handle form data (e.g., send data to a server or update state)
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps: steps.split(".").map((step) => step.trim()),
    };

    console.log("New Recipe Submitted: ", newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Add New Recipe</h2>
      
      {errorMessage && (
        <div className="bg-red-100 text-red-600 p-2 mb-4 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Eggs, Flour, Milk"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Step 1: Do this. Step 2: Do that."
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
