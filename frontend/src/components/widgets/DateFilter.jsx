import React from 'react';
import { Box, TextField } from '@mui/material';

const DateFilter = ({ fromDate, toDate, setFromDate, setToDate }) => {
  return (
    <Box display="flex" gap={2} sx={{ mt: 2 }}>
      <TextField
        label="From"
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <TextField
        label="To"
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Box>
  );
};

export default DateFilter;
