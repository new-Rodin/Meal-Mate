// src/pages/FavoritesPage/FavoritesPage.js
import React from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const toggleFavorite = (recipe) => {
        // In favorites page, "toggling" always means removing
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== recipe.id));
    };

    return (
        <div className="favorites-page" style={{ padding: '2rem' }}>
            <h2 style={{fontFamily:'Lato', color:'#e11932'}}>Your Saved Recipes</h2>
            {/* Users can revisit previously saved recipes [cite: 21] */}
            <RecipeList
                recipes={favorites}
                favorites={favorites} // Pass favorites to itself to correctly mark cards
                onToggleFavorite={toggleFavorite}
            />
        </div>
    );
};

export default FavoritesPage;