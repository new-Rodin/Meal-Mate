// src/components/RecipeCard/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }) => {
    return (
        // Recipe cards with image, title, and short description [cite: 16, 33]
        <div className="recipe-card">
            <Link to={`/recipe/${recipe.id}`} className="card-link">
                <img src={recipe.image} alt={recipe.title} className="card-image" />
                <div className="card-body"> 
                    <h3 className="card-title">{recipe.title}</h3>
                </div>
            </Link>
            <button
                className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(recipe)}
            >
                {isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
    );
};

export default RecipeCard;