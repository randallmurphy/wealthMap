import axios from 'axios';

const API_BASE = '/api';

const getAllIncome = async () => {
  const res = await axios.get(`${API_BASE}/income`);
  return Array.isArray(res.data) ? res.data : [];
};

const getAllExpenses = async () => {
  const res = await axios.get(`${API_BASE}/expenses`);
  return Array.isArray(res.data) ? res.data : [];
};

const getAllAssets = async () => {
  const res = await axios.get(`${API_BASE}/assets`);
  return Array.isArray(res.data) ? res.data : [];
};

const getAllLiabilities = async () => {
  const res = await axios.get(`${API_BASE}/liabilities`);
  return Array.isArray(res.data) ? res.data : [];
};

const analyticsService = {
  getAllIncome,
  getAllExpenses,
  getAllAssets,
  getAllLiabilities,
};

export default analyticsService;
