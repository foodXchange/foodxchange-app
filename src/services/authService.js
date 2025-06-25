// src/services/authService.js
const API_URL = 'http://localhost:5000/api';

export const authService = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      throw error;
    }
  },
  
  async register(userData) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (error) {
      throw error;
    }
  },
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
  
  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  getToken() {
    return localStorage.getItem('token');
  }
};
