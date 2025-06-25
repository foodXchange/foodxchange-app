import api from './api';

const analyticsService = {
  // Get dashboard analytics
  getDashboard: async (period = 'monthly') => {
    try {
      const response = await api.get('/analytics/dashboard', { 
        params: { period } 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get category performance
  getCategoryPerformance: async () => {
    try {
      const response = await api.get('/analytics/categories');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get AI insights
  getInsights: async () => {
    try {
      const response = await api.get('/analytics/insights');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

export default analyticsService;
