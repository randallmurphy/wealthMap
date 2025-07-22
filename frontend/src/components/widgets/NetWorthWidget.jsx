import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const NetWorthWidget = ({ income = 0, expenses = 0, assets = 0, liabilities = 0 }) => {
  const netWorth = (assets + income) - (liabilities + expenses);

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6">Net Worth</Typography>
        <Typography variant="h4" color={netWorth >= 0 ? 'green' : 'error'}>
          ${netWorth.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NetWorthWidget;
