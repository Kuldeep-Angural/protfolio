import SchoolIcon from '@mui/icons-material/School';
import TaskIcon from '@mui/icons-material/Task';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Card, CardContent, Chip, Grid, Tab, Tabs, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import { educations } from '../constants/Educations';
import { projects } from '../constants/projects';
import { skills } from '../constants/skills';
import CardDesign from './CardDesign';
export const SkillSection = () => {
  const [current, setCurrent] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };


  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} style={{ transition: 'opacity 0.5s ease-in-out', opacity: '1.5', overflow: 'hidden' }} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography style={{ transition: 'opacity 0.5s ease-in-out', opacity: '1.5', overflow: 'hidden' }}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    setCurrent(newValue);
  };
  return (
    <>
      <Grid style={{ height: '100vh' }}>
        <Grid container direction="column" alignItems="center" spacing={2} mt={6}>
          <Typography textAlign={'center'} style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.1rem' }}>
            TECH I'M FAMILIAR WITH
          </Typography>
          {skills.map((skillItem) => (
            <Grid item container direction="column" alignItems="center" key={skillItem.skills}>
              <Typography className="text-center">{skillItem.title}</Typography>
              <Grid item container justifyContent="center" spacing={2}>
                {skillItem.skills.map((skill) => (
                  <Grid item key={skill.name}>
                    <Chip sx={{ height: '60px', width: '150px' }} avatar={<Avatar alt="Natacha" src={skill.image} />} label={skill.name} variant="outlined" />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center">
          <Tabs className="text" value={current} onChange={handleChange}>
            <Tab icon={<WorkIcon color="" />} />
            <Tab icon={<SchoolIcon />} />
            <Tab icon={<TaskIcon />} />
          </Tabs>
        </Grid>
        <CustomTabPanel value={current} index={0} {...a11yProps(0)}>
          <div className="container mt-5">
            <h1 className="text-center" style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>
              Experience
              <p style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.1rem' }}>Adding Experience soon.</p>
            </h1>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={current} index={1} {...a11yProps(1)}>
          <Grid container spacing={2} marginTop={2}>
            <div className="container mt-5">
              <h1 className="text-center" style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>
                Education
                <p style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.1rem' }}>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
              </h1>
            </div>
            {educations.map((edu) => {
              return edu.programs.map((program) => {
                return (
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '260px' }}>
                      <CardMedia component="img" style={{ height: '100px', width: '100px', objectFit: 'contain', objectPosition: 'center top' }} src={program.image} alt="Paella dish" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={8} md={8}>
                            <Typography sx={{ color: 'inherit' }} variant="h7" component="h7">
                              <Typography>{program.name}</Typography>
                              <Typography>{program.university}</Typography>
                              <Typography>{program.location}</Typography>
                              <Typography>{program.completed}</Typography>
                            </Typography>
                            <Typography sx={{ height: '50px' }}>{''}</Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              });
            })}
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={current} index={2} {...a11yProps(2)}>
          <div className="container mt-5">
            {projects.map((item) => {
              return (
                <div className="row  col-md-12 mb-4 d-flex justify-content-center alingn-item-center mx-4">
                  <h1 className="text-center" style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>
                    projects
                    <p style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.1rem' }}>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
                  </h1>
                  {item.project.map((program) => {
                    return (
                      <div className="col-md-4 mt-3 mb-2 align-item-center justify-content-center ">
                        <CardDesign props={program} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </CustomTabPanel>
      </Grid>
    </>
  );
};
