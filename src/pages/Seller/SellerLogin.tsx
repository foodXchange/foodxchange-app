import React, { useState } from 'react';
import './SellerLogin.css';

const SellerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // TODO: Add actual login logic
    alert('Login functionality will be added soon!');
  };

  return (
    <div className="seller-login">
      <div className="login-container">
        <h2>Supplier Login</h2>
        <p>Access your supplier dashboard</p>
        
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
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <a href="/seller/register">Register here</a></p>
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
