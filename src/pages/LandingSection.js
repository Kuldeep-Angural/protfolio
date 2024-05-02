import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { bio, professionWords, socialMediaHandle } from '../constants/informationText';
import image from '../images/newBackground1.png';
import InfoIcon from '@mui/icons-material/Info';

export const LandingSection = ({ onClick, onAboutClick }) => {
  const SocialMediaAvatar = ({ name, link, image }) => {
    return (
      <Link sx={{ mt: 6 }} key={name} mb={5} title={name} href={link} color="inherit" underline="none" target="_blank" style={{ fontWeight: '700' }}>
        <Avatar alt={name} src={image} />
      </Link>
    );
  };

  return (
    <Grid container>
      <Grid md={6} sm={12} justifyContent="center" alignItems="center">
        <img src={image} style={{ height: '550px', color: 'inherit', marginLeft: '0px', maxWidth: '100%' }} alt="myImg" />
      </Grid>
      <Grid md={6} sm={12} maxHeight={5}>
        <Typography variant="h4" textAlign="center" sx={{ mt: 5 }}>
          <Typography variant="h4" fontFamily={'cursive'} fontWeight={600}>
            Hi, my name is Kuldeep Kumar
          </Typography>{' '}
          <br />
          <span>I am a </span>
          <span style={{ color: '#98B1D9', fontFamily: 'monospace', fontWeight: 900, letterSpacing: '.3rem' }}>
            <Typewriter words={professionWords} loop={5} typeSpeed={40} deleteSpeed={40} cursor />
          </span>
          <br />
        </Typography>
        <Typography sx={{ margin: '20px' }} fontWeight={600} lineHeight={1.5} variant="h5">
          {bio + '.'}
        </Typography>
        <Grid display="flex" gap={2} justifyContent="center" alignContent="center" alignItems="center">
          <Button variant="outlined" style={{ width: '180px', marginTop: '10px', fontSize: '20px', color: 'inherit', borderRadius: '20px' }} onClick={onClick} startIcon={<WorkIcon />}>
            Hire me
          </Button>
          <Button variant="outlined" style={{ width: '180px', marginTop: '10px', fontSize: '20px', color: 'inherit', borderRadius: '20px' }} onClick={onAboutClick} startIcon={<InfoIcon />}>
            About me
          </Button>
        </Grid>
        <Box>
          <Grid gap={3} display="flex" justifyContent="center" mb={4} alignContent="center" alignItems="center">
            {socialMediaHandle.map((item) => (
              <SocialMediaAvatar key={item.name} name={item.name} link={item.link} image={item.image} />
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
