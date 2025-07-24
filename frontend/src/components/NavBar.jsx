import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';

import DarkModeToggle from "./DarkModeToggle";
import { useAuth } from './hooks/useAuth';

const NavBar = () => {
  const { user } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e2f', px: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h4"
          component={RouterLink}
          to="/dashboard"
          sx={{
            color: '#FFD700', // gold drip
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: 2,
          }}
        >
          MoneyKingMurph
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {user ? (
            <>
              <Tooltip title={`Logged in as ${user.name}`}>
                {/* <Avatar sx={{ bgcolor: '#FFD700', color: '#1e1e2f' }}>
                  {user.name[0].toUpperCase()}
                </Avatar> */}
              </Tooltip>
              <Typography
                variant="subtitle1"
                sx={{ color: '#FFD700', fontWeight: '600', minWidth: 100 }}
              >
                {user.name}
              </Typography>
              <LogoutButton />
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={RouterLink} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
         <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
