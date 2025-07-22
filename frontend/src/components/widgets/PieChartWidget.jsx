import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const PieChartWidget = ({ assets = 0, liabilities = 0 }) => {
  const data = [
    { name: 'Assets', value: assets },
    { name: 'Liabilities', value: liabilities },
  ];

  const COLORS = ['#4caf50', '#f44336'];

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Assets vs Liabilities</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              label
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartWidget;
