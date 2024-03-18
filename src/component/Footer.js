import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Container maxWidth="100%" sx={{ boxShadow: 3, position: 'fixed', bottom: '0px', alignItems: 'center', justifyContent: 'center', textAlign: 'center'  }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          color: 'inherit',
          textDecoration: 'none',
          fontSize: '15px',
        }}
      >
        &#169;All right reserved &#8482;2024
      </Typography>

      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.0rem',
          color: 'inherit',
          textDecoration: 'none',
          fontSize: '15px',
        }}
      >
        &nbsp;
        <a style={{ color: 'inherit' }} href="https://navv.info/">
          navv.info
        </a>
        &#174;
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
    </Container>
  );
};

export default Footer;
