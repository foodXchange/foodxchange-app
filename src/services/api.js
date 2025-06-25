const API_URL = 'http://localhost:5000/api';

export const api = {
  url: API_URL,
  
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
      },
    };
    
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  }
};
