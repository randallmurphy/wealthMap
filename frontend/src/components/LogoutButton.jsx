import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useAuth } from './hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>Logout</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out? No worries, you can always come back stronger.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleLogout} color="error">Logout</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutButton;
