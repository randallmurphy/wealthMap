import React from 'react';
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const categories = [
  'Housing', 'Transportation', 'Food', 'Utilities', 'Healthcare',
  'Debt Payments', 'Savings & Investments', 'Entertainment', 'Miscellaneous'
];

const CategorySelector = ({ category, setCategory }) => (
  <FormControl fullWidth>
    <InputLabel>Category</InputLabel>
    <Select
      value={category}
      label="Category"
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((cat) => (
        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default CategorySelector;
