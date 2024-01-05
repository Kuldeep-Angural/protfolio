import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Toast = ({ opentoast, handleClose, time = 6000, width = '100%', message, vertical = 'top', horizontal = 'center', mesageType }) => {
  return (
    <Snackbar sx={{ display: 'flex', justifyContent: 'center' }} open={opentoast} autoHideDuration={6000} onClose={handleClose} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
      <Alert onClose={handleClose} severity={mesageType} sx={{ width: width }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
