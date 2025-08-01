import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import CategorySelector from './CategorySelector'; // Optional if using sub-categories

const AddEntryForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('income');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [subCategory, setSubCategory] = useState(''); // Optional for filtering

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      category: category.toLowerCase(),
      amount: parseFloat(amount),
      date,
      description: subCategory, // optional or rename to match your model
    });

    setAmount('');
    setDate('');
    setSubCategory('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="expense">Expense</MenuItem>
        <MenuItem value="asset">Asset</MenuItem>
        <MenuItem value="liability">Liability</MenuItem>
      </TextField>

      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Optional: Subcategory or Notes */}
      <CategorySelector category={subCategory} setCategory={setSubCategory} />

      <Button type="submit" variant="contained" color="primary">
        Add Entry
      </Button>
    </Box>
  );
};

export default AddEntryForm;
