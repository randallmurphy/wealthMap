import React from 'react';
import { Box, Typography, Paper, Grid, Avatar, Button, Container, Chip } from '@mui/material';
import { useAuth } from '../components/hooks/useAuth';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Profile = () => {
  const { user } = useAuth();

  const cardStyle = {
    p: 4,
    borderRadius: 4,
    background: '#1a1a1a',
    border: '2px solid #FFD70055',
    boxShadow: '0 0 12px #FFD70055',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={10} sx={{ ...cardStyle }}>
          <Avatar
            sx={{
              bgcolor: '#FFD700',
              width: 100,
              height: 100,
              margin: '0 auto',
              mb: 3,
              fontSize: 40,
              color: '#000',
              boxShadow: '0 0 20px #FFD70088',
            }}
          >
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </Avatar>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#FFD700' }}>
            {user?.name || 'Money King'}
          </Typography>

          <Typography variant="body1" sx={{ color: '#ccc', mb: 3 }}>
            Welcome to your personal profile hub, where you manage your empire.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2, backgroundColor: '#2c2c2c', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ color: '#bbb', display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PersonIcon fontSize="small" sx={{ mr: 1, color: '#FFD700' }} />
                  Name
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{user?.name || 'N/A'}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2, backgroundColor: '#2c2c2c', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ color: '#bbb', display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmailIcon fontSize="small" sx={{ mr: 1, color: '#FFD700' }} />
                  Email
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{user?.email || 'N/A'}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2, backgroundColor: '#2c2c2c', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ color: '#bbb', display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: '#FFD700' }} />
                  Member Since
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2, backgroundColor: '#2c2c2c', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ color: '#bbb', display: 'flex', alignItems: 'center', mb: 1 }}>
                  🏷️ Status
                </Typography>
                <Chip
                  label="Active"
                  color="success"
                  variant="outlined"
                  sx={{ fontWeight: 'bold', borderColor: '#4caf50', color: '#4caf50' }}
                />
              </Paper>
            </Grid>
          </Grid>

          <Button
            startIcon={<EditIcon />}
            variant="contained"
            sx={{
              mt: 5,
              background: 'linear-gradient(to right, #FFD700, #FFA500)',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: 8,
              px: 4,
              py: 1.5,
              boxShadow: '0 0 12px #FFA50055',
              '&:hover': {
                background: 'linear-gradient(to right, #FFA500, #FFD700)',
                boxShadow: '0 0 20px #FFD700aa',
              },
            }}
          >
            Edit Profile
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
