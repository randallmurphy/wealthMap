import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Toast = ({ open, onClose, severity = 'success', message }) => (
  <Snackbar open={open} autoHideDuration={4000} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
);

export default Toast;
