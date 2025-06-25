import { api } from './api';

export const productService = {
  async getAll() {
    return api.request('/products');
  },
  
  async getById(id) {
    return api.request(`/products/${id}`);
  },
  
  async create(productData) {
    return api.request('/products', {
      method: 'POST',
      body: JSON.stringify(productData)
    });
  },
  
  async update(id, productData) {
    return api.request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData)
    });
  },
  
  async delete(id) {
    return api.request(`/products/${id}`, {
      method: 'DELETE'
    });
  }
};
