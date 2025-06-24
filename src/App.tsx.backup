import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import SellerLogin from './pages/Seller/SellerLogin';
import SellerDashboard from './pages/Seller/SellerDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
