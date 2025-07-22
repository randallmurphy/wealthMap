import React from 'react';
import { MenuItem, TextField } from '@mui/material';

const categories = ['Housing', 'Transportation', 'Food', 'Utilities', 'Healthcare', 'Savings', 'Debt', 'Investments'];

const BudgetCategorySelect = ({ value, onChange }) => {
  return (
    <TextField
      select
      label="Category"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{ mt: 2 }}
    >
      {categories.map((cat, idx) => (
        <MenuItem key={idx} value={cat}>{cat}</MenuItem>
      ))}
    </TextField>
  );
};

export default BudgetCategorySelect;
