import axios from 'axios';

// Configure base URL for API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.baseURL + config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

// Asset related functions
export const addAsset = async (assetData) => {
  try {
    const response = await api.post('/api/wealth/assets', assetData);
    return response.data;
  } catch (error) {
    console.error('Error adding asset:', error);
    throw error;
  }
};

export const getAssets = async () => {
  try {
    const response = await api.get('/api/wealth/assets');
    return response.data;
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};

export const updateAsset = async (id, assetData) => {
  try {
    const response = await api.put(`/api/wealth/assets/${id}`, assetData);
    return response.data;
  } catch (error) {
    console.error('Error updating asset:', error);
    throw error;
  }
};

export const deleteAsset = async (id) => {
  try {
    const response = await api.delete(`/api/wealth/assets/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting asset:', error);
    throw error;
  }
};

// Expense related functions
export const addExpense = async (expenseData) => {
  try {
    const response = await api.post('/api/wealth/expenses', expenseData);
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};

export const getExpenses = async () => {
  try {
    const response = await api.get('/api/wealth/expenses');
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const updateExpense = async (id, expenseData) => {
  try {
    const response = await api.put(`/api/wealth/expenses/${id}`, expenseData);
    return response.data;
  } catch (error) {
    console.error('Error updating expense:', error);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await api.delete(`/api/wealth/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw error;
  }
};

// Items related functions (for liabilities, etc.)
export const addItem = async (itemType, itemData) => {
  try {
    const response = await api.post(`/api/items/${itemType}`, itemData);
    return response.data;
  } catch (error) {
    console.error(`Error adding ${itemType} item:`, error);
    throw error;
  }
};

export const getItems = async (itemType) => {
  try {
    const response = await api.get(`/api/items/${itemType}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${itemType} items:`, error);
    throw error;
  }
};

export const updateItem = async (itemType, id, itemData) => {
  try {
    const response = await api.put(`/api/items/${itemType}/${id}`, itemData);
    return response.data;
  } catch (error) {
    console.error(`Error updating ${itemType} item:`, error);
    throw error;
  }
};

export const deleteItem = async (itemType, id) => {
  try {
    const response = await api.delete(`/api/items/${itemType}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting ${itemType} item:`, error);
    throw error;
  }
};

export default api;