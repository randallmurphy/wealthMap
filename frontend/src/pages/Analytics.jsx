import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Analytics = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#FFD700' }}>
        📊 Analytics & Reports
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: '#1e1e2f',
              color: '#fff',
              borderRadius: 3,
              boxShadow: '0 0 15px #FFD700',
            }}
          >
            <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>
              📈 Income vs Expenses
            </Typography>
            <Typography>
              (Graph or chart will go here to compare monthly income and expenses.)
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: '#1e1e2f',
              color: '#fff',
              borderRadius: 3,
              boxShadow: '0 0 15px #FFD700',
            }}
          >
            <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>
              📊 Asset vs Liabilities
            </Typography>
            <Typography>
              (Graph or chart will go here to visualize your current assets vs liabilities.)
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: '#1e1e2f',
              color: '#fff',
              borderRadius: 3,
              boxShadow: '0 0 15px #FFD700',
            }}
          >
            <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>
              🔁 Monthly Trends & Forecast
            </Typography>
            <Typography>
              (Line charts or projections can be added here to show future net worth growth.)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
