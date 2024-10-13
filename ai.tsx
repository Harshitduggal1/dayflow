// NotFound.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css'; // Assuming you have a CSS file for styles

const NotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('/');
    };

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">
                Oops! The page you're looking for doesn't exist.
            </p>
            <img
                src="https://via.placeholder.com/400" // Replace with a relevant illustration or icon
                alt="Not Found"
                className="not-found-image"
            />
            <button className="go-home-button" onClick={handleGoHome}>
                Go to Homepage
            </button>
            <div className="suggestions">
                <h3>Here are some links that may help:</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/products">Product List</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NotFound;
