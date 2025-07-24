import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

const PieChartWidget = ({ assets = 0, liabilities = 0 }) => {
  const data = [
    { name: 'Assets', value: assets },
    { name: 'Liabilities', value: liabilities },
  ];

  const COLORS = ['#FFD700', '#f44336']; // Gold and Red for liability

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
        Assets vs Liabilities
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              label={{ fill: '#fff', fontWeight: 'bold' }}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#12121f',
                borderRadius: 6,
                borderColor: '#FFD700',
                color: '#fff',
              }}
              labelStyle={{ color: '#FFD700' }}
              itemStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default PieChartWidget;
