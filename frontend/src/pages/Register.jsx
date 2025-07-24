import React, { useState, useContext } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'; // Adjust path as needed

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    // Frontend simple validation
    if (!form.name || !form.email || !form.password) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);
    const res = await register(form);
    setLoading(false);

    if (!res.success) {
      setError(res.error || 'Registration failed');
    } else {
      setSuccessMsg('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#12121f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={10} sx={{ p: 4, borderRadius: 3, backgroundColor: '#1e1e2f', minWidth: 350 }}>
        <Typography variant="h4" sx={{ color: '#FFD700', mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            required
            margin="normal"
            value={form.name}
            onChange={handleChange}
            sx={{ input: { color: '#FFD700' } }}
          />
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
          {successMsg && (
            <Typography color="success.main" sx={{ mt: 1 }}>
              {successMsg}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="warning"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
