import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Container maxWidth="100%" sx={{ boxShadow: 3, position: 'relative', bottom: '0px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
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
        href="#app-bar-with-responsive-menu"
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
        &nbsp; Kuldeep Kumar &#174;
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
    </Container>
  );
};

export default Footer;
