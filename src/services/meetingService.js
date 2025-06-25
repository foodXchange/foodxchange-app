import api from './api';

const meetingService = {
  // Schedule a meeting
  schedule: async (meetingData) => {
    try {
      const response = await api.post('/meetings/schedule', meetingData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get upcoming meetings
  getUpcoming: async () => {
    try {
      const response = await api.get('/meetings/upcoming');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get meeting history
  getHistory: async (page = 1, limit = 10) => {
    try {
      const response = await api.get('/meetings/history', { 
        params: { page, limit } 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Join meeting
  join: async (meetingId) => {
    try {
      const response = await api.post(`/meetings/${meetingId}/join`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update meeting status
  updateStatus: async (meetingId, status, reason = null) => {
    try {
      const response = await api.put(`/meetings/${meetingId}/status`, { 
        status, 
        cancelledReason: reason 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Add meeting notes
  addNotes: async (meetingId, content) => {
    try {
      const response = await api.post(`/meetings/${meetingId}/notes`, { content });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

export default meetingService;
