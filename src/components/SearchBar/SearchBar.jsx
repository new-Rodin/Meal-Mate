// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const availableIngredients = ['Chicken', 'Beef', 'Tomatoes', 'Cheese', 'Onions'];

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleIngredientChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedIngredients(prev => [...prev, value]);
        } else {
            setSelectedIngredients(prev => prev.filter(ing => ing !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query, selectedIngredients); // Passes search term and ingredients up
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            {/* Search bar for dish name*/}
            <input
                type="text"
                className="search-input"
                placeholder="Search for a dish or ingredients..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* Ingredients input as checkboxe */}
            <div className="ingredient-filters">
                <p>Or select ingredients:</p>
                {availableIngredients.map(ingredient => (
                    <label key={ingredient} className="ingredient-label">
                        <input
                            type="checkbox"
                            value={ingredient}
                            onChange={handleIngredientChange}
                        />
                        {ingredient}
                    </label>
                ))}
            </div>

            <button type="submit" className="search-button">Search Recipes</button>
        </form>
    );
};

export default SearchBar;