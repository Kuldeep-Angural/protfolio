import emailjs from '@emailjs/browser';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Chip, Link } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AppModal from '../component/Modal';
import Toast from '../component/Toast';
import { bio, professionWords, socialMediaHandle } from '../constants/informationText';
import { projects } from '../constants/projects';
import { skills } from '../constants/skills';
import image from '../images/roundBg.png';
import CardDesign from './CardDesign';
import { educations } from '../constants/Educations';
import { EduCardDesign } from '../constants/EduCardDesign';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [opentoast, setopentoast] = useState(false);
  const [message, setMessage] = useState('');
  const [mesageType, setMessageType] = useState('success');

  const actionHirebutton = () => {
    setModalOpen(true);
  };

  const getModalData = (data) => {
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

  return (
    <>
      <Toast opentoast={opentoast} handleClose={handleClose} time={3000} mesageType={mesageType} message={message} vertical="top" horizontal="center" />
      <AppModal open={modalOpen} onClose={handleCloseModal} title="Example Modal" getData={getModalData} content="This is some example content for the modal." />
      <div className="container mt-5" style={{height:'auto'}} >
        <div className="row">
          <div className="col-md-6">
            <img src={image} height={350} style={{ border: '2px solid', color: 'inherit', borderRadius: '50%', marginLeft: '0px', maxWidth: '100%', height: 'auto' }} alt="myImg" />
          </div>

          {/* Hero heading */}
          <div className="col-md-6 " style={{ height: '600px' }}>
            <div className="col-md-12 mb-5 text-center">
              <p className="intro fs-2 mt-5  w-100 " style={{ height: '100px', width: '250px' }}>
                Hi, my name is Kuldeep Kumar <br />
                <span>
                  I am a <Typewriter words={professionWords} loop={5} typeSpeed={40} deleteSpeed={40} cursor />
                </span>
                <br></br>
              </p>
              <p className="fs-4 h-25 mt-5  mb-5">
                {bio}
                <Button variant="outlined" style={{ width: '290px', marginTop: '10px', fontSize: '20px', color: 'inherit' }} onClick={actionHirebutton} startIcon={<WorkIcon />}>
                  Hire me
                </Button>
              </p>
            </div>
          </div>
        </div>

        {/* Social media   */}
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center ">
            {socialMediaHandle.map((item) => {
              return (
                <div className="col-md-2 mt-4" style={{ width: 'auto' }} key={item.name}>
                  <Link title={item.name} href={item.link} color="inherit" underline="none" target="_blank" style={{ fontWeight: '700' }}>
                    <Avatar style={{ cursor: 'pointer' }} alt={item.name} src={item.image} className="mb-5 mt-5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-center">
          <h1 className="text-center" style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>
            Skills
            <p style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.1rem' }}>Here are some of my skills on which I have been working on for the past 2 years.</p>
          </h1>
        </div>
        <div className="d-flex g-5 col-md-12 mt-5 justify-content-center align-item-center ">
          {/* Skills */}
          <div className="row g-5 m-5  mt-5 col-md-12">
            {skills.map((skillItem) => {
              <h2>Skills & projects</h2>;

              return (
                <div className="col-sm  mt-5 text center " key={skillItem.skills}>
                  <p className="text-center mt-5">{skillItem.title}</p>
                  {skillItem.skills.map((skills) => {
                    return <Chip sx={{ height: '60px' }} key={skills.name} avatar={<Avatar alt="Natacha" src={skills.image} />} label={skills.name} variant="outlined" />;
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects */}

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
      </div>

      <div className="container mt-5">
        <div className="row  col-md-12 mb-4 d-flex justify-content-center alingn-item-center mx-4">
          <h1 className="text-center" style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>
            Education
            <p style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.1rem' }}>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
          </h1>
          {educations.map((edu) => {
            return edu.programs.map((educations) => {
              return (
                <div className="col-md-4 mt-3 mb-2 align-item-center justify-content-center ">
                  <EduCardDesign props={educations} />
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
