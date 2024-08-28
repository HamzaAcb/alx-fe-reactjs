import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Existing recipes array
  searchTerm: '',  // New state for search term
  setSearchTerm: (term) => set({ searchTerm: term }),  // Action to set search term
  filteredRecipes: [],  // New state for filtered results
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));
