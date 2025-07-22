import axios from '../utils/axios';

export const addAsset = async (data) => {
  const res = await axios.post('/wealth/assets', data);
  return res.data;
};

export const getAssets = async () => {
  const res = await axios.get('/wealth/assets');
  return res.data;
};

export const addExpense = async (data) => {
  const res = await axios.post('/wealth/expenses', data);
  return res.data;
};

export const getExpenses = async () => {
  const res = await axios.get('/wealth/expenses');
  return res.data;
};
