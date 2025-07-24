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
    } else {
      setName('');
      setAmount('');
      setCategory('');
    }
  }, [currentBudget, open]);

  const handleSubmit = () => {
    handleSave({ name, amount: Number(amount), category });
    handleClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: '#1e1e2f',
          color: '#fff',
          borderRadius: 3,
          boxShadow: '0 0 15px #FFD700',
          minWidth: 400,
        }
      }}
    >
      <DialogTitle sx={{ 
        fontWeight: 'bold', 
        color: '#FFD700', 
        fontFamily: "'Poppins', sans-serif" 
      }}>
        {currentBudget ? 'Edit Budget Item' : 'Add Budget Item'}
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{ style: { color: '#FFD700' } }}
          sx={{
            input: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#FFD700' },
              '&:hover fieldset': { borderColor: '#FFD700' },
              '&.Mui-focused fieldset': { borderColor: '#FFD700' },
            },
            mb: 2,
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          InputLabelProps={{ style: { color: '#FFD700' } }}
          sx={{
            input: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#FFD700' },
              '&:hover fieldset': { borderColor: '#FFD700' },
              '&.Mui-focused fieldset': { borderColor: '#FFD700' },
            },
            mb: 2,
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          select
          InputLabelProps={{ style: { color: '#FFD700' } }}
          sx={{
            color: '#fff',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#FFD700' },
              '&:hover fieldset': { borderColor: '#FFD700' },
              '&.Mui-focused fieldset': { borderColor: '#FFD700' },
            },
            mb: 1,
            '& .MuiSelect-icon': {
              color: '#FFD700',
            },
          }}
        >
          <MenuItem value="Housing">Housing</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Transportation">Transportation</MenuItem>
          <MenuItem value="Utilities">Utilities</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button 
          onClick={handleClose} 
          sx={{ color: '#FFD700' }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          sx={{ backgroundColor: '#FFD700', color: '#12121f', fontWeight: 'bold', '&:hover': { backgroundColor: '#e6c200' } }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BudgetModal;
