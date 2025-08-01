// ===========================
// frontend/components/LiabilitiesForm.jsx
// ===========================
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const LiabilitiesForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/liabilities', {
        name,
        amount: parseFloat(amount),
        date,
        description,
        notes,
      });
      console.log('✅ Liability Added:', res.data);
      setName('');
      setAmount('');
      setDate('');
      setDescription('');
      setNotes('');
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
      alert('Failed to add liability.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <TextField label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} InputLabelProps={{ shrink: true }} />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
      <Button type="submit" variant="contained" color="primary">Add Liability</Button>
    </Box>
  );
};

export default LiabilitiesForm;