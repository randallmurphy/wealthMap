import React from 'react';
import { Paper, Typography } from '@mui/material';

const SummaryWidget = ({ title, amount }) => {
  const displayAmount = typeof amount === 'number' ? amount.toLocaleString() : '0';

  return (
    <Paper
      elevation={10}
      sx={{
        minWidth: 200,
        minHeight: 150,
        p: 3,
        backgroundColor: '#1e1e2f',
        boxShadow: '0 0 15px #FFD700',
        borderRadius: 3,
        textAlign: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFD700', mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
        ${displayAmount}
      </Typography>
    </Paper>
  );
};

export default SummaryWidget;
