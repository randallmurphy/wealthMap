import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { addAsset } from '../services/wealthService';
import { toast } from 'react-toastify';

const AssetForm = () => {
  const [form, setForm] = useState({ name: '', value: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAsset(form);
      toast.success('Asset added!');
      setForm({ name: '', value: '' });
    } catch (err) {
      toast.error('Failed to add asset');
      console.log(err);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>Add Asset</Typography>
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Asset Name" fullWidth value={form.name} onChange={handleChange} sx={{ mb: 2 }} />
        <TextField name="value" label="Value" fullWidth value={form.value} onChange={handleChange} sx={{ mb: 2 }} />
        <Button variant="contained" type="submit">Add Asset</Button>
      </form>
    </Paper>
  );
};

export default AssetForm;
