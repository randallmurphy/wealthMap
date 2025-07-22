import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const BarChartWidget = ({ income = 0, expenses = 0 }) => {
  const data = [
    { name: 'Income', amount: income },
    { name: 'Expenses', amount: expenses },
  ];

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Income vs Expenses</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartWidget;
