import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import instance from '../utils/axios';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      // 👇 Instead of fetching `/me`, just trust the token is valid
      // If you want extra security, decode token or verify login again later
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
      }
    }
    setLoading(false);
  }, []);

  const register = async (formData) => {
    try {
      const res = await instance.post('/register', formData);
      setAuthToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      return { success: true };
    } catch (err) {
      console.error('Register error:', err);
      return {
        success: false,
        error: err.response?.data?.message || 'Registration failed',
      };
    }
  };

  const login = async (formData) => {
    try {
      const res = await instance.post('/login', formData);
      setAuthToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      return {
        success: false,
        error: err.response?.data?.message || 'Login failed',
      };
    }
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
