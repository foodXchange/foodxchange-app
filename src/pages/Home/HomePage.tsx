import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to FoodXchange</h1>
        <p>Connecting 23,000+ Food Suppliers with Global Buyers</p>
        
        <div className="hero-buttons">
          <Link to="/seller/login" className="btn btn-primary">
            Supplier Portal
          </Link>
          <Link to="/buyer/login" className="btn btn-secondary">
            Buyer Portal
          </Link>
        </div>
        
        <div className="stats">
          <div className="stat">
            <h3>23,206</h3>
            <p>Verified Suppliers</p>
          </div>
          <div className="stat">
            <h3>224</h3>
            <p>Products</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
