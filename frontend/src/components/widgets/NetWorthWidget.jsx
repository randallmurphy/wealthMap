import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const NetWorthWidget = ({ income = 0, expenses = 0, assets = 0, liabilities = 0 }) => {
  const netWorth = (assets + income) - (liabilities + expenses);

  return (
    <Paper
      elevation={10}
      sx={{
        p: 3,
        backgroundColor: '#1e1e2f',
        boxShadow: '0 0 15px #FFD700',
        borderRadius: 3,
        color: '#fff',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', color: '#FFD700', mb: 1 }}
      >
        Net Worth
      </Typography>
      <Typography
        variant="h4"
        sx={{ color: netWorth >= 0 ? '#4caf50' : '#f44336', fontWeight: 'bold' }}
      >
        ${netWorth.toLocaleString()}
      </Typography>
    </Paper>
  );
};

export default NetWorthWidget;
