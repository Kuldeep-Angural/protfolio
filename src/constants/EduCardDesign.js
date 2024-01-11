import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const EduCardDesign = ({ props }) => {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardMedia component="img" style={{ height: '220px', width: '325px', objectFit: 'contain', objectPosition: 'center top' }} src={props.image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.name}
          <br></br>
          {props.university}
          <br></br>
          {props.location}
          <br></br>
          {props.completed}
        </Typography>
      </CardContent>
    </Card>
  );
};
