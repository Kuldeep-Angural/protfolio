import emailjs from '@emailjs/browser';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FeedIcon from '@mui/icons-material/Feed';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, Grid, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import { IconButton } from '../component/IconButton';
import Toast from '../component/Toast';
import { LandingSection } from './LandingSection';
import { SkillSection } from './SkillSection';
export const HeroSection = ({ chacked, onChange }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [opentoast, setopentoast] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [mesageType, setMessageType] = useState('success');
  const [currentScreen, setCurrentScreen] = useState('main');
  const navigate = useNavigate();

  const actionHirebutton = () => {
    setModalOpen(true);
  };

  const getModalData = (data) => {
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateid = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: 'Kuldeep kumar',
      message: ` getting this message :${data.message} , from ${data.email}`,
    };

    emailjs.send(serviceId, templateid, templateParams, publicKey).then((result) => {
      if (result.status === 200) {
        setMessage(`Email sent successfully!`);
      } else {
        setMessageType('error');
        setMessage(`Something went-wrong`);
      }

      setLoading(false);
      setopentoast(true);
      setModalOpen(false);
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClose = () => {
    setopentoast(false);
  };
  const onAboutClick = () => {
    setCurrentScreen('about');
  };

  const CustomLink = ({ to, icon, style, tooltip,onClick,  }) => (
    <Tooltip title={tooltip} >
     <Button
        style={{ ...style }}
        component={Link}
        to={to}
        variant="text"
        color="primary"
        size="small"
        sx={{ mb: 2, minWidth: 'unset' }}
        onClick={onClick}
      >
        {icon}
      </Button>
  </Tooltip>
  );

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container>
        <Toast opentoast={opentoast} handleClose={handleClose} time={3000} mesageType={mesageType} message={message} vertical="top" horizontal="center" />

        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid display={'flex'} justifyContent={'end'}>
            <CustomLink   style={{ marginRight: '10px', marginTop: '10px' }} icon={<HomeIcon sx={{ color: chacked ? 'white' : 'black' }} />} onClick={()=>setCurrentScreen('main')} to='/' tooltip="Home" />

              <IconButton style={{ marginRight: '10px', marginTop: '10px' }} icon={<FeedIcon sx={{ color: chacked ? 'white' : 'black' }} />} onClick={() => window.open('https://drive.google.com/file/d/1gztQ097DXVDSo_vzwjEVXgCB28ra65pU/view?usp=sharing')} tooltip="Resume" />

              <IconButton style={{ marginRight: '10px', marginTop: '10px' }} icon={<LinkedInIcon sx={{ color: chacked ? 'white' : 'black' }} />} onClick={() => window.open('https://www.linkedin.com/in/kuldeep-kumar-485a13252/')} tooltip="Linkedin" />

              <IconButton style={{ marginRight: '10px', marginTop: '10px' }} icon={<GitHubIcon sx={{ color: chacked ? 'white' : 'black' }} />} onClick={() => window.open('https://github.com/KuldeepKumarAngural')} tooltip="Git-Hub" />
              <IconButton style={{ marginRight: '20px', marginTop: '10px' }} onClick={onChange} value={chacked} tooltip={chacked ? 'Turn on The Light' : 'Turn of The Light'} icon={chacked ? <LightModeIcon sx={{ color: chacked ? 'white' : 'black' }} /> : <DarkModeIcon sx={{ color: chacked ? 'white' : 'black' }} />} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {currentScreen === 'about' ? <SkillSection /> : <LandingSection onClick={actionHirebutton} onAboutClick={onAboutClick} />}
        </Grid>

        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          {/* {currentScreen === 'about' && (
            <Grid display={'flex'} justifyContent={'space-between'}>
              <IconButton style={{ marginLeft: '120px', marginTop: '10px' }} icon={<ArrowBackIosIcon sx={{ color: chacked ? 'white' : 'black' }} />} onClick={() => window.open('https://www.linkedin.com/in/kuldeep-kumar-485a13252/')} tooltip="Back" />
              <IconButton style={{ marginRight: '120px', marginTop: '10px' }} icon={<ArrowForwardIosIcon sx={{ color: chacked ? 'white' : 'black' }} />} onClick={() => window.open('https://www.linkedin.com/in/kuldeep-kumar-485a13252/')} tooltip="More " />
            </Grid>
          )} */}
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};


