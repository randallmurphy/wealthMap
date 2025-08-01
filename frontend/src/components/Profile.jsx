import React from 'react';
import { Box, Typography, Paper, Avatar, Grid, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        p: 4,
        background: 'linear-gradient(to bottom, #0a0a0a, #12121f)',
        minHeight: '100vh',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          letterSpacing: 2,
          textAlign: 'center',
          color: '#FFD700',
          textShadow: '0 0 15px #FFD70088, 0 0 30px #FFA50055',
        }}
      >
        My Profile 🧬
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={10}
            sx={{
              p: 4,
              borderRadius: 4,
              background: '#1e1e2f',
              border: '2px solid #FFD700',
              boxShadow: '0 0 25px #FFD70055',
              color: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: '#FFD700',
                  mb: 2,
                  boxShadow: '0 0 12px #FFD70088',
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 70, color: '#12121f' }} />
              </Avatar>

              <Typography variant="h5" fontWeight="bold" sx={{ color: '#FFD700' }}>
                {user?.name || 'Money King'}
              </Typography>

              <Typography sx={{ color: '#bbb', fontSize: '1rem', mt: 1, mb: 3 }}>
                {user?.email || 'user@email.com'}
              </Typography>

              <Divider
                sx={{
                  backgroundColor: '#FFD70044',
                  my: 2,
                  width: '100%',
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '100%',
                  gap: 1,
                  mb: 2,
                }}
              >
                <AccountCircleIcon sx={{ color: '#FFA500' }} />
                <Typography>Name:</Typography>
                <Typography sx={{ color: '#ccc' }}>{user?.name || 'N/A'}</Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '100%',
                  gap: 1,
                }}
              >
                <EmailIcon sx={{ color: '#FFA500' }} />
                <Typography>Email:</Typography>
                <Typography sx={{ color: '#ccc' }}>{user?.email || 'N/A'}</Typography>
              </Box>

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 3,
                    py: 1,
                    background: 'linear-gradient(to right, #FFD700, #FFA500)',
                    color: '#12121f',
                    fontWeight: 'bold',
                    borderRadius: 8,
                    cursor: 'pointer',
                    boxShadow: '0 0 15px #FFA50088',
                    '&:hover': {
                      background: 'linear-gradient(to right, #FFA500, #FFD700)',
                      boxShadow: '0 0 25px #FFD700aa',
                    },
                  }}
                >
                  <EditIcon sx={{ mr: 1 }} />
                  Edit Profile
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
