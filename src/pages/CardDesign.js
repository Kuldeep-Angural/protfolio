import {  Card, CardContent, Fab, Grid, Typography } from '@mui/material'
import React from 'react'

const CardDesign = ({props}) => {

    console.log(props);

  return (
    <Card
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(156 221 235 / 19%), rgb(148 241 238 / 22%));',
          border: '1px solid #e9dddd'
        }}
      >
        <CardContent style={{ minHeight: '100px', color: '#fff' }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={2}
                  md={2}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography
                    variant="h6"
                    component="h6"
                   
                  >
                    {/* <FAIcon size="xl" icon={icon} /> */}
                  </Typography>
                </Grid>
                <Grid item xs={10} md={10}>
                  <Typography
                    variant="h6"
                    component="h6"
                    color="primary"
                    style={{
                      lineHeight: '20px'
                    }}
                  >
                    <p>{props.name}</p>
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
                    {props.completed}
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