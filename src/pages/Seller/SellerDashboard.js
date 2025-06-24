import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerDashboard.css';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [sellerInfo, setSellerInfo] = useState(null);

  useEffect(() => {
    const info = localStorage.getItem('sellerInfo');
    if (!info) {
      navigate('/seller/login');
    } else {
      setSellerInfo(JSON.parse(info));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('sellerToken');
    localStorage.removeItem('sellerInfo');
    navigate('/seller/login');
  };

  if (!sellerInfo) return <div>Loading...</div>;

  return (
    <div className="seller-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {sellerInfo.companyName}!</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>0</h3>
          <p>Products Listed</p>
        </div>
        <div className="stat-card">
          <h3>0</h3>
          <p>Active RFQs</p>
        </div>
        <div className="stat-card">
          <h3>0</h3>
          <p>Orders</p>
        </div>
      </div>
      
      <div className="dashboard-content">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn">Add Product</button>
          <button className="action-btn">View RFQs</button>
          <button className="action-btn">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
