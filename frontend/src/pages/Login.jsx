import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(form);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
      console.log(err)
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#12121f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={10} sx={{ p: 4, borderRadius: 3, backgroundColor: '#1e1e2f', minWidth: 350 }}>
        <Typography variant="h4" sx={{ color: '#FFD700', mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={form.email}
            onChange={handleChange}
            sx={{ input: { color: '#FFD700' } }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={form.password}
            onChange={handleChange}
            sx={{ input: { color: '#FFD700' } }}
          />
          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="warning" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;