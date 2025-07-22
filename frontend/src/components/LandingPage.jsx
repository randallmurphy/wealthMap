import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box p={4} textAlign="center">
      <Typography variant="h3" gutterBottom>Welcome to WealthMap</Typography>
      <Typography variant="h6" gutterBottom>Track your finances and level up</Typography>
      <Button variant="contained" onClick={() => navigate('/login')} sx={{ m: 1 }}>Login</Button>
      <Button variant="outlined" onClick={() => navigate('/signup')} sx={{ m: 1 }}>Signup</Button>
    </Box>
  );
};

export default LandingPage;
