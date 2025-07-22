import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import CategorySelector from './CategorySelector';

const AddEntryForm = ({ onSubmit }) => {
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, amount, date, category });
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
      <TextField
        select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="Income">Income</MenuItem>
        <MenuItem value="Expense">Expense</MenuItem>
        <MenuItem value="Asset">Asset</MenuItem>
      </TextField>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <CategorySelector category={category} setCategory={setCategory} />
      <Button type="submit" variant="contained" color="primary">Add Entry</Button>
    </Box>
  );
};

export default AddEntryForm;
