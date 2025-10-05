// src/services/recipeAPI.js
const API_KEY = 'cdf5917abf6e496593a247e2f946bd76';
const BASE_URL = 'https://api.spoonacular.com/recipes';

/**
 * Fetches recipes based on a search query and ingredients. 
 * @param {string} query - The dish name to search for. 
 * @param {string[]} ingredients - A list of ingredients to include. 
 * @param {number} number
 * @param {number} id
 * @returns {Promise<any>} - A promise that resolves to the search results.
 */
export const getRandomRecipes = async (number = 25) => {
    const url = `${BASE_URL}/random?apiKey=${API_KEY}&number=${number}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.recipes; // The random endpoint returns an object with a 'recipes' array
    } catch (error) {
        console.error("Failed to fetch random recipes:", error);
        return [];
    }
}
export const getSummary = async (id) => {
    const url = `${BASE_URL}/${id}/summary?apiKey=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.recipes; // The random endpoint returns an object with a 'recipes' array
    } catch (error) {
        console.error("Failed to fetch Summary:", error);
        return [];
    }
}
export const searchRecipes = async (query, ingredients) => {
    // Spoonacular's API expects ingredients as a comma-separated string
    const ingredientsString = ingredients.join(',');

    // This endpoint allows searching by query, ingredients, and more.
    const url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&includeIngredients=${ingredientsString}&addRecipeInformation=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        // Return an empty array on error to prevent app crash
        return [];
    }
};

/**
 * Fetches detailed information for a specific recipe by its ID.
 * @param {number} id - The ID of the recipe.
 * @returns {Promise<any>} - A promise that resolves to the recipe details.
 */
export const getRecipeDetails = async (id) => {
    // This endpoint gets full recipe details including instructions and nutrition. [cite: 18, 19, 40]
    const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}&includeNutrition=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch recipe details:", error);
        return null;
    }
};