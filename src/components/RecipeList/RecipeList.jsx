// src/components/RecipeList/RecipeList.js
import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';

const RecipeList = ({ recipes, favorites, onToggleFavorite }) => {
    if (!recipes || recipes.length === 0) {
        return <p>No recipes found. Try a different search!</p>;
    }

    return (
        // Show recipe results in an organized layout [cite: 9]
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites.some(fav => fav.id === recipe.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};

export default RecipeList;