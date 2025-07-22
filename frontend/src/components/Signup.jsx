import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signup } from '../services/authService';
import ToastNotification from './ToastNotification';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      setToast({ type: 'success', message: 'Signup successful!' });
      navigate('/login');
    } catch {
      setToast({ type: 'error', message: 'Signup failed' });
    }
  };

  return (
    <Box p={4} maxWidth="400px" mx="auto">
      <Typography variant="h5" gutterBottom>Signup</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Signup</Button>
      </form>
      {toast && <ToastNotification {...toast} />}
    </Box>
  );
};

export default Signup;
