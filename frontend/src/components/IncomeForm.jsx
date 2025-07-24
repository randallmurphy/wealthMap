import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const IncomeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert amount to number
    const amountNum = parseFloat(formData.amount);
    if (!formData.source || isNaN(amountNum) || amountNum <= 0) {
      alert('Please enter a valid source and positive amount');
      return;
    }
    onSubmit && onSubmit({ ...formData, amount: amountNum });
    // reset form
    setFormData({ source: '', amount: '', date: '', notes: '' });
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
      <Typography variant="h6" sx={{ color: '#FFD700', mb: 2, textAlign: 'center' }}>
        Add Income Entry
      </Typography>

      <TextField
        label="Source"
        name="source"
        value={formData.source}
        onChange={handleChange}
        variant="filled"
        fullWidth
        InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
        InputLabelProps={{ style: { color: '#FFD700' } }}
        required
      />

      <TextField
        label="Amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        type="number"
        variant="filled"
        fullWidth
        InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
        InputLabelProps={{ style: { color: '#FFD700' } }}
        inputProps={{ step: '0.01', min: '0' }}
        required
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
        InputLabelProps={{ style: { color: '#FFD700' } }}
        // InputLabelProps={{ shrink: true }}
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
        sx={{ backgroundColor: '#FFD700', color: '#1e1e2f', fontWeight: 'bold' }}
      >
        Add Income
      </Button>
    </Box>
  );
};

export default IncomeForm;
