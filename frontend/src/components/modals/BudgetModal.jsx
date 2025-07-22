import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem
} from '@mui/material';

const BudgetModal = ({ open, handleClose, handleSave, currentBudget }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentBudget) {
      setName(currentBudget.name || '');
      setAmount(currentBudget.amount || '');
      setCategory(currentBudget.category || '');
    }
  }, [currentBudget]);

  const handleSubmit = () => {
    handleSave({ name, amount, category });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{currentBudget ? 'Edit Budget Item' : 'Add Budget Item'}</DialogTitle>
      <DialogContent>
        <TextField fullWidth margin="dense" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth margin="dense" label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
        <TextField fullWidth margin="dense" label="Category" value={category} onChange={(e) => setCategory(e.target.value)} select>
          <MenuItem value="Housing">Housing</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Transportation">Transportation</MenuItem>
          <MenuItem value="Utilities">Utilities</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BudgetModal;
