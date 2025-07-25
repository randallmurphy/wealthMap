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
  const loadUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token); // sets axios default header
      try {
        const res = await instance.get('/me'); // <-- THIS fails with 404
        setUser(res.data); // set user info
      } catch (err) {
        // On failure, clear user/token and logout
        setUser(null);
        setAuthToken(null);
        console.log(err)
      }
    } else {
      setUser(null);
      setAuthToken(null);
    }
    setLoading(false);
  };
  loadUser();
}, []);


  const register = async (formData) => {
    try {
      const res = await instance.post('/register', formData);
      setAuthToken(res.data.token);
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
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
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || 'Login failed',
      };
    }
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
