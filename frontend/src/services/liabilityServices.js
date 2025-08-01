// src/services/liabilityService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/liabilities'; // Or use environment variable

export const createLiability = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const getLiabilities = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteLiability = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

export const updateLiability = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};
