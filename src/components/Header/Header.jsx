// src/components/Header/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <header className="app-header">
            <NavLink to="/" className="main-logo">Meal-Mate</NavLink>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Favorites</NavLink>
            </nav>
        </header>
    );
};

export default Header;