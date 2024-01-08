import CloseIcon from '@mui/icons-material/Close';
import { Button, Card, Grid, Input, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

const AppModal = ({ open, onClose, title, content, getData }) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const subMitData = () => {
    if (data?.name && data?.email && data?.message) {
      getData(data);
          } else {
      //toast here
    }
  };
  return (
    <Modal sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Card sx={{ height: '400px', width: '400px' }}>
        <Typography variant="h5" id="modal-title" gutterBottom>
          <CloseIcon sx={{ position: 'relative', right: '-355px', marginTop: '10px', cursor: 'pointer', fontSize: '30px' }} onClick={onClose} />
        </Typography>
        <Grid container spacing={2} style={{ margin: ''  }} className='text-center'> 
        
        <p className='text-center ' style={{marginLeft:'115px'}}>Only for Contact reference</p> 
          <Grid item xs={12} md={12} style={{ marginLeft: '50px', marginRight: '50px', marginBottom: '30px' }}>
            <Input aria-label="name" type="text" name="name" required style={{ width: '100%' }} onChange={handleChange} placeholder="enter your name" value={data?.name} />
          </Grid>
          <Grid item xs={12} md={12} style={{ marginLeft: '50px', marginRight: '50px', marginBottom: '30px' }}>
            <Input aria-label="email" type="email" name="email" style={{ width: '100%' }} required onChange={handleChange} placeholder="enter your email" value={data?.email} />
          </Grid>
          <Grid item xs={12} md={12} style={{ marginLeft: '50px', marginRight: '50px', marginBottom: '30px' }}>
            <Input multiline type="text" maxRows={2} required name="message" aria-label="message" onChange={handleChange} style={{ width: '100%', height: '40px', overflow: 'hidden' }} value={data.message} placeholder="write something" />
          </Grid>
          <Button variant="outlined" style={{ marginLeft: '175px', marginTop: '10px' }} onClick={subMitData}>
            Send
          </Button>
        </Grid>
      </Card>
    </Modal>
  );
};

export default AppModal;
