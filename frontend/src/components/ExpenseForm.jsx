import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { addExpense } from '../services/wealthServise';

const ExpenseForm = () => {
  const [form, setForm] = useState({ name: '', amount: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExpense(form);
      toast.success('Expense added!');
      setForm({ name: '', amount: '' });
    } catch (err) {
      toast.error('Failed to add expense');
      console.error(err);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Expense
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Expense Name"
          fullWidth
          value={form.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          name="amount"
          label="Amount"
          fullWidth
          value={form.amount}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Add Expense
        </Button>
      </form>
    </Paper>
  );
};

export default ExpenseForm;
