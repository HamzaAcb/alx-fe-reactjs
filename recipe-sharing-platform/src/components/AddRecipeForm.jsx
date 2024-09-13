// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!title.trim()) errors.title = 'Title is required';
        if (!ingredients.trim()) errors.ingredients = 'Ingredients are required';
        if (!steps.trim()) errors.steps = 'Preparation steps are required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Handle successful form submission here
            console.log('Form submitted:', { title, ingredients, steps });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-extrabold text-center mb-8">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full p-2`}
                    />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="4"
                        className={`border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full p-2`}
                    />
                    {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
                        Preparation Steps
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="4"
                        className={`border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full p-2`}
                    />
                    {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
