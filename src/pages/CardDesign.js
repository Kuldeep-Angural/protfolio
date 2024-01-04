import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CardDesign = ({ props }) => {
  return (
    <Card sx={{ maxWidth: 355 }} style={{boxShadow: '1px 2px 2px ' ,color:'inherit'}} >
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
        <a href={props.image} target="_blank" rel="noreferrer">
          <Button size="small">view Full image</Button>
        </a>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardDesign;
