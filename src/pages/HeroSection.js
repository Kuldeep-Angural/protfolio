import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Chip, Link } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AppModal from '../component/Modal';
import { bio, professionWords, socialMediaHandle } from '../constants/informationText';
import { projects } from '../constants/projects';
import { skills } from '../constants/skills';
import image from '../images/roundBg.png';
import CardDesign from './CardDesign';
const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const actionHirebutton = () => {
    setModalOpen(true);
  };

  const getModalData = (data) => {
    console.log(data);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <AppModal open={modalOpen} onClose={handleCloseModal} title="Example Modal" getData={getModalData} content="This is some example content for the modal." />
      <div className="container mt-5">
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

          {/* Social media   */}
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
      </div>

      <div className="mt-5">
        <div className="text-center">
          <h2 style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit' }}>Skills</h2>
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
    </>
  );
};

export default HeroSection;
