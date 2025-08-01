import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const ENTRY_CATEGORIES = [
  { name: 'Income', value: 'income' },
  { name: 'Expense', value: 'expense' },
  { name: 'Asset', value: 'asset' },
  { name: 'Liability', value: 'liability' },
];

const EntryForm = ({ onAdded }) => {
  const [category, setCategory] = useState('income');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !amount) return alert('Name and amount are required.');

    try {
      const newEntry = { category, name, amount: parseFloat(amount), date, description, notes };
      onAdded(newEntry);
      setName('');
      setAmount('');
      setDate('');
      setDescription('');
      setNotes('');
    } catch (err) {
      alert('Add failed, try again.', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2} sx={{ mb: 4 }}>
      <TextField
        select
        label="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      >
        {ENTRY_CATEGORIES.map(c => (
          <MenuItem key={c.value} value={c.value}>{c.name}</MenuItem>
        ))}
      </TextField>

      <TextField label="Name" value={name} onChange={e => setName(e.target.value)} required />
      <TextField label="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
      <TextField label="Date" type="date" value={date} onChange={e => setDate(e.target.value)} InputLabelProps={{ shrink: true }} />
      <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <TextField label="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
      <Button variant="contained" color="primary" type="submit" size="large">
        Add Entry
      </Button>
    </Box>
  );
};

export default EntryForm;
