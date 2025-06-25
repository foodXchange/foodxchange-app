import api from './api';

const matchingService = {
  // Find supplier matches
  findSuppliers: async (requirements, async = false) => {
    try {
      const response = await api.post('/matching/find-suppliers', { 
        requirements, 
        async 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get improvement tips
  getImprovementTips: async () => {
    try {
      const response = await api.get('/matching/improvement-tips');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

export default matchingService;
