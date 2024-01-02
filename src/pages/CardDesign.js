import {  Card, CardContent, Fab, Grid, Typography } from '@mui/material'
import React from 'react'

const CardDesign = ({props}) => {


  return (
    <Card
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(156 221 235 / 19%), rgb(148 241 238 / 22%));',
          
        }}
      >
        <CardContent style={{ minHeight: '150px',  }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                 
                   <img src={props.image} height={100} width={150} alt='ima'></img>
                </Grid>
                <Grid item xs={10} md={10}>
                  <Typography
                    variant="h6"
                    component="h6"
                    color="inherit"
                    style={{
                      lineHeight: '20px'
                    }}
                  >
                    <p>{props.name}</p>
                    <p style={{fontSize:'15px'}}>{props.feature}</p>


                  </Typography>
                  <div>
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      lineHeight: '8px',
                      display: 'flex'
                    }}
                  >
                    {props.techStack}
                  </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={12} style={{ display: 'flex', justifyContent: 'end' }}>
           
            {props.location}
            
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  )
}

export default CardDesign