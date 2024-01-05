import { Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';

const CardDesign = ({ props }) => {
  return (
    <Card sx={{ maxWidth: 355 }} style={{ height: '350px' }}>
      <CardMedia sx={{ height: 140 }} image={props.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Info: {props.feature}</p>
          TechStack: {props.techStack}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.image} className='text-center' target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
          <Link underline="none" style={{fontSize:'17px',marginLeft:'60px'}} size="small">FULL IMAGE</Link>
        </a>
        <Link href={props.link}   underline="none" target="_blank">DOWNLOAD</Link>
      </CardActions>
    </Card>
  );
};

export default CardDesign;
