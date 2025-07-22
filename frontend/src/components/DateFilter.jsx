import React from 'react';
import { TextField, Box } from '@mui/material';

const DateFilter = ({ fromDate, toDate, setFromDate, setToDate }) => (
  <Box display="flex" gap={2}>
    <TextField
      type="date"
      label="From"
      InputLabelProps={{ shrink: true }}
      value={fromDate}
      onChange={(e) => setFromDate(e.target.value)}
    />
    <TextField
      type="date"
      label="To"
      InputLabelProps={{ shrink: true }}
      value={toDate}
      onChange={(e) => setToDate(e.target.value)}
    />
  </Box>
);

export default DateFilter;
