// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RecipeDetailPage from './pages/RecipeDetailPage/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import Header from './components/Header/Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;