import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    const res = await register(formData);
    setLoading(false);

    if (!res.success) {
      setError(res.error);
    } else {
      setSuccessMsg('Registration successful! Redirecting...');
      setTimeout(() => {
        navigate('/login'); // redirect to login page
      }, 1500);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>Register</Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        type="email"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}

      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </Box>
  );
};

export default Register;
