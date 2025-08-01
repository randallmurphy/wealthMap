import axios from './axios';

export const getIncomes = () => axios.get('/income');
export const addIncome = (data) => axios.post('/income', data);
export const updateIncome = (id, data) => axios.put(`/income/${id}`, data);
export const deleteIncome = (id) => axios.delete(`/income/${id}`);
