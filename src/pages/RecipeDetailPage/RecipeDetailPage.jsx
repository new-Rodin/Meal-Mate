// src/pages/RecipeDetailPage/RecipeDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../services/RecipeAPI';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            const data = await getRecipeDetails(id);
            setRecipe(data);
            setIsLoading(false);
        };
        fetchDetails();
    }, [id]);

    if (isLoading) return <p>Loading details...</p>;
    if (!recipe) return <p>Recipe not found.</p>;

    // Recipe detail page with ingredients + steps [cite: 34]
    return (
        <div className="recipe-detail-page">
            <h1 className="detail-title" style={{ color: "#212121" }}>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="detail-image" />

            <div className="detail-content">
                {/* Full list of ingredients*/}
                <div className="ingredients-section">
                    <h2 style={{ color: "#f9d1d6" }}>Ingredients</h2>
                    <ul>
                        {recipe.extendedIngredients.map(ing => (
                            <li key={ing.id}>{ing.original}</li>
                        ))}
                    </ul>
                </div>

                {/* Step-by-step instructions*/}
                <div className="instructions-section">
                    <h2 style={{ color: "#f9d1d6" }}>Instructions</h2>
                    <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </div>

                {/* (Optional) calories, dietary info */}
                {recipe.nutrition && (
                    <div className="nutrition-section">
                        <h2 style={{ color: "#f9d1d6" }}>Nutrition Facts (per serving)</h2>
                        <p>Calories: {recipe.nutrition.nutrients.find(n => n.name === 'Calories').amount}kcal</p>
                        <p>Protein: {recipe.nutrition.nutrients.find(n => n.name === 'Protein').amount}g</p>
                    </div>
                )}
                <div className='Recipe-Summary'>
                    <h2 style={{ color: "#f9d1d6" }}>Summary</h2>
                    <p style={{textDecoration:"none"}} dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailPage;