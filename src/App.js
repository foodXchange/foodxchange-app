import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ background: '#1a1a1a', padding: '1rem' }}>
          <Link to="/" style={{ color: '#f97316', margin: '0 1rem' }}>Home</Link>
          <Link to="/products" style={{ color: '#14b8a6', margin: '0 1rem' }}>Products</Link>
          <Link to="/login" style={{ color: '#14b8a6', margin: '0 1rem' }}>Login</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to FoodXchange</h1>
      <p>B2B Food Trading Platform</p>
    </div>
  );
}

function Products() {
  return <h2>Products Coming Soon...</h2>;
}

function Login() {
  return <h2>Login Coming Soon...</h2>;
}

export default App;