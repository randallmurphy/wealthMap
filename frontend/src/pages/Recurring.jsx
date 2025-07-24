import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  TextField,
  MenuItem,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from '@mui/material';

const Recurring = () => {
  const [recurringType, setRecurringType] = useState('expense');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [startDate, setStartDate] = useState('');
  const [notes, setNotes] = useState('');
  const [recurringItems, setRecurringItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      type: recurringType,
      name,
      amount: parseFloat(amount),
      frequency,
      startDate,
      notes,
    };

    setRecurringItems((prev) => [...prev, newEntry]);

    // Reset form
    setName('');
    setAmount('');
    setFrequency('monthly');
    setStartDate('');
    setNotes('');
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: '#FFD700',
          textShadow: '0 0 10px #FFD700',
        }}
      >
        🔁 Recurring Entry Setup
      </Typography>

      <Paper
        elevation={6}
        sx={{
          padding: 3,
          backgroundColor: '#1e1e2f',
          borderRadius: 3,
          boxShadow: '0 0 15px #FFD700',
          mb: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormLabel component="legend" sx={{ color: '#FFD700', mb: 1 }}>
            Type
          </FormLabel>
          <RadioGroup
            row
            value={recurringType}
            onChange={(e) => setRecurringType(e.target.value)}
            sx={{ mb: 2 }}
          >
            <FormControlLabel
              value="income"
              control={<Radio sx={{ color: '#FFD700' }} />}
              label="Income"
            />
            <FormControlLabel
              value="expense"
              control={<Radio sx={{ color: '#FFD700' }} />}
              label="Expense"
            />
          </RadioGroup>

          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#FFD700' } }}
            InputProps={{ style: { backgroundColor: '#2c2c3c' } }}
          />

          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#FFD700' } }}
            InputProps={{ style: { backgroundColor: '#2c2c3c' } }}
          />

          <TextField
            select
            label="Frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            fullWidth
            sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#FFD700' } }}
            InputProps={{ style: { backgroundColor: '#2c2c3c' } }}
          >
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="biweekly">Biweekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="annually">Annually</MenuItem>
          </TextField>

          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#FFD700' } }}
            InputProps={{ style: { backgroundColor: '#2c2c3c' } }}
          />

          <TextField
            label="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            fullWidth
            multiline
            rows={2}
            sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#FFD700' } }}
            InputProps={{ style: { backgroundColor: '#2c2c3c' } }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#FFD700',
              color: '#121212',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#e6c200',
              },
            }}
          >
            ➕ Add Recurring Entry
          </Button>
        </form>
      </Paper>

      {recurringItems.length > 0 && (
        <Paper
          sx={{
            padding: 3,
            backgroundColor: '#1e1e2f',
            borderRadius: 3,
            boxShadow: '0 0 10px #FFD700',
          }}
        >
          <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>
            📅 Current Recurring Entries
          </Typography>
          <Divider sx={{ mb: 2, backgroundColor: '#FFD700' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recurringItems.map((item) => (
              <Paper
                key={item.id}
                sx={{
                  padding: 2,
                  backgroundColor: '#2c2c3c',
                  borderRadius: 2,
                  color: '#fff',
                }}
              >
                <Typography fontWeight="bold">
                  {item.name} - ${item.amount.toFixed(2)} ({item.frequency})
                </Typography>
                <Typography variant="body2" color="gray">
                  Start: {item.startDate}
                </Typography>
                {item.notes && (
                  <Typography variant="body2" fontStyle="italic" color="lightgray">
                    “{item.notes}”
                  </Typography>
                )}
              </Paper>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Recurring;
