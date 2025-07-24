import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

const BarChartWidget = ({ income = 0, expenses = 0 }) => {
  const data = [
    { name: 'Income', amount: income },
    { name: 'Expenses', amount: expenses },
  ];

  return (
    <Paper
      elevation={10}
      sx={{
        p: 3,
        backgroundColor: '#1e1e2f',
        boxShadow: '0 0 15px #FFD700',
        borderRadius: 3,
        color: '#fff',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#FFD700' }}>
        Income vs Expenses
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: '#12121f', borderRadius: 6, borderColor: '#FFD700' }}
              labelStyle={{ color: '#FFD700' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ color: '#FFD700' }} />
            <Bar dataKey="amount" fill="#FFD700" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default BarChartWidget;
