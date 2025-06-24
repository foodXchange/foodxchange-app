import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="/logo.png" alt="FoodXchange" className="logo" />
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <div className="role-selector">
          <button 
            className={`role-btn ${role === 'buyer' ? 'active' : ''}`}
            onClick={() => setRole('buyer')}
          >
            Buyer
          </button>
          <button 
            className={`role-btn ${role === 'seller' ? 'active' : ''}`}
            onClick={() => setRole('seller')}
          >
            Seller
          </button>
          <button 
            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
          <button 
            className={`role-btn ${role === 'contractor' ? 'active' : ''}`}
            onClick={() => setRole('contractor')}
          >
            Contractor
          </button>
          <button 
            className={`role-btn ${role === 'agent' ? 'active' : ''}`}
            onClick={() => setRole('agent')}
          >
            Agent
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
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

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="social-login">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn google">
              <img src="/google-icon.svg" alt="Google" />
              Google
            </button>
            <button className="social-btn microsoft">
              <img src="/microsoft-icon.svg" alt="Microsoft" />
              Microsoft
            </button>
            <button className="social-btn linkedin">
              <img src="/linkedin-icon.svg" alt="LinkedIn" />
              LinkedIn
            </button>
          </div>
        </div>

        <div className="login-footer">
          <p>
            Don't have an account? 
            <Link to={`/register?role=${role}`}> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
