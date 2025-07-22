import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Box p={4}>
      <Typography variant="h4">Profile</Typography>
      <Typography mt={2}>Name: {user?.name}</Typography>
      <Typography>Email: {user?.email}</Typography>
    </Box>
  );
};

export default Profile;
