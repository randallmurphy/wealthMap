import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ p: 4, backgroundColor: '#12121f', minHeight: '100vh', color: '#fff' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 3,
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: 3,
          color: '#FFD700',
          textAlign: 'center',
        }}
      >
        Welcome Back, {user?.name || 'Money King'} 👑
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Example cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={10}
            sx={{
              p: 3,
              backgroundColor: '#1e1e2f',
              borderRadius: 3,
              textAlign: 'center',
              boxShadow: '0 0 15px #FFD700',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
              Manage Items
            </Typography>
            <Typography sx={{ mb: 2 }}>
              View, add, or edit your budget items with ease.
            </Typography>
            <Button variant="contained" color="warning" href="/dashboard/items">
              Go to Items
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={10}
            sx={{
              p: 3,
              backgroundColor: '#1e1e2f',
              borderRadius: 3,
              textAlign: 'center',
              boxShadow: '0 0 15px #FFD700',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
              Recurring Setup
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Automate your budget with recurring items & notifications.
            </Typography>
            <Button variant="contained" color="warning" href="/dashboard/recurring">
              Set Recurring
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={10}
            sx={{
              p: 3,
              backgroundColor: '#1e1e2f',
              borderRadius: 3,
              textAlign: 'center',
              boxShadow: '0 0 15px #FFD700',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
              Analytics & Reports
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Dive into charts and filters to track your money moves.
            </Typography>
            <Button variant="contained" color="warning" href="/dashboard/analytics">
              View Reports
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
