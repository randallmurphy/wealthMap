import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const ToastNotification = ({ type, message }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={() => setOpen(false)} severity={type} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;
