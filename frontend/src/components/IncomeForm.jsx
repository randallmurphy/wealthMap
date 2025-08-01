import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const IncomeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.source.trim()) {
      newErrors.source = 'Income source is required';
      valid = false;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      newErrors.amount = 'Enter a valid amount greater than 0';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const incomeEntry = {
      ...formData,
      amount: parseFloat(formData.amount),
      date: formData.date || new Date().toISOString().split('T')[0], // fallback to today
    };

    if (onSubmit) onSubmit(incomeEntry);

    // Reset form
    setFormData({ source: '', amount: '', date: '', notes: '' });
    setErrors({});
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: '#1e1e2f',
        padding: 3,
        borderRadius: 2,
        boxShadow: '0 0 10px #FFD700',
        maxWidth: 400,
        margin: 'auto',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: '#FFD700', textAlign: 'center' }}>
        Add Income Entry
      </Typography>

      <TextField
        label="Source"
        name="source"
        value={formData.source}
        onChange={handleChange}
        variant="filled"
        fullWidth
        required
        error={!!errors.source}
        helperText={errors.source}
        InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
        InputLabelProps={{ style: { color: '#FFD700' } }}
      />

      <TextField
        label="Amount ($)"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        type="number"
        variant="filled"
        fullWidth
        required
        error={!!errors.amount}
        helperText={errors.amount}
        inputProps={{ step: '0.01', min: '0' }}
        InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
        InputLabelProps={{ style: { color: '#FFD700' } }}
      />

      <TextField
        label="Date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        variant="filled"
        fullWidth
        InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
        InputLabelProps={{ style: { color: '#FFD700' }, shrink: true }}
      />

      <TextField
        label="Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        variant="filled"
        fullWidth
        multiline
        rows={2}
        InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
        InputLabelProps={{ style: { color: '#FFD700' } }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#FFD700',
          color: '#1e1e2f',
          fontWeight: 'bold',
          ':hover': { backgroundColor: '#ffeb3b' },
        }}
      >
        Add Income
      </Button>
    </Box>
  );
};

export default IncomeForm;
