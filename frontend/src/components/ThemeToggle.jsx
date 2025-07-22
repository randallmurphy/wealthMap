import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
    {darkMode ? <Brightness7 /> : <Brightness4 />}
  </IconButton>
);

export default ThemeToggle;
