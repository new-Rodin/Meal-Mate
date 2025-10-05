// src/pages/HomePage/HomePage.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeList from '../../components/RecipeList/RecipeList';
import { searchRecipes, getRandomRecipes } from '../../Services/RecipeAPI';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './HomePage.css';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    useEffect(() => {
        // This function is defined inside useEffect to avoid dependency warnings
        const fetchInitialRecipes = async () => {
            const randomRecipes = await getRandomRecipes(25); // Fetch 25 random recipes
            setRecipes(randomRecipes);
            setIsLoading(false);
        };
        fetchInitialRecipes();
    }, []); // The empty array [] means this effect runs only ONCE when the component mounts

    const handleSearch = async (query, ingredients) => {
        setIsLoading(true);
        const results = await searchRecipes(query, ingredients); // App calls the recipe API
        setRecipes(results);
        setIsLoading(false);
    };

    const toggleFavorite = (recipe) => {
        const isFavorited = favorites.some(fav => fav.id === recipe.id);
        if (isFavorited) {
            setFavorites(favorites.filter(fav => fav.id !== recipe.id));
        } else {
            setFavorites([...favorites, recipe]);
        }
    };

    return (
        <div className="home-page">
            <SearchBar onSearch={handleSearch} />
            {isLoading ? (
                <p>Loading recipes...</p>
            ) : (
                <RecipeList
                    recipes={recipes}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                />
            )}
        </div>
    );
};

export default HomePage;