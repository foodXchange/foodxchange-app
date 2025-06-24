import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SellerLogin.css';

const SellerLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/seller/login', {
        email,
        password
      });

      if (response.data.success) {
        localStorage.setItem('sellerToken', response.data.token);
        localStorage.setItem('sellerInfo', JSON.stringify(response.data.seller));
        alert('Login successful!');
        navigate('/seller/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="seller-login">
      <div className="login-container">
        <h2>Supplier Login</h2>
        <p>Access your supplier dashboard</p>
        
        {error && (
          <div style={{ 
            background: '#fee', 
            color: '#c00', 
            padding: '10px', 
            borderRadius: '4px',
            marginBottom: '20px' 
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@company.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <a href="/seller/register">Register here</a></p>
          <a href="/">Back to Home</a>
        </div>
        
        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          background: '#f0f0f0', 
          borderRadius: '8px' 
        }}>
          <h4>Test Account:</h4>
          <p>Email: demo@supplier.com</p>
          <p>Password: TempPass123!</p>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
