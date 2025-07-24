import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const ToastNotification = ({ open, message, severity = 'info', handleClose }) => (
  <Snackbar 
    open={open} 
    autoHideDuration={4000} 
    onClose={handleClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert
      onClose={handleClose}
      severity={severity}
      sx={{
        width: '100%',
        backgroundColor: '#1e1e2f',
        color: '#FFD700',
        border: '1.5px solid #FFD700',
        fontWeight: 'bold',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 0 10px #FFD700',
        '& .MuiAlert-icon': { color: '#FFD700' },
        '&:hover': { backgroundColor: '#2a2a44' },
      }}
    >
      {message}
    </Alert>
  </Snackbar>
);

export default ToastNotification;
