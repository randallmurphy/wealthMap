import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SummaryWidget = ({ title, amount }) => (
  <Card sx={{ minWidth: 200, textAlign: 'center' }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4" color="primary">${amount}</Typography>
    </CardContent>
  </Card>
);

export default SummaryWidget;
