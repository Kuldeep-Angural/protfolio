import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const APStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid md={12} >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.name}>
            <StepLabel optional={index === steps.length - 1 ? <Typography variant="caption"></Typography> : null}>{step.name}</StepLabel>
            <StepContent>
              <Typography sx={{ color: 'inherit' }} variant="h7" component="h7">
                <Typography>{step.university}</Typography>
                <Typography>{step.location}</Typography>
                <Typography>{step.completed}</Typography>
                <Typography>{step.info}</Typography>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={index === steps.length - 1 ? handleReset : handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? 'Finish' : 'next'}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
    </Grid>
  );
};

export default APStepper;
