import instance from '../utils/axios';
//import axios from './axios';

export const getIncomes = () => instance.get('/income');
export const addIncome = (data) => instance.post('/income', data);
export const updateIncome = (id, data) => instance.put(`/income/${id}`, data);
export const deleteIncome = (id) => instance.delete(`/income/${id}`);
