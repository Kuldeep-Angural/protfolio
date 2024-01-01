import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import image from '../images/image1.png';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import { bio, professionWords } from '../constants/informationText';
const HeroSection = () => {
  return (
    <>
    <div style={{height:'100vh'}} className="d-flex mt-5 col-md-12 w-100  justify-content-center align-item-center col-md-12 ">
     <div className='mt-5 ms-1'>
     <figure class="text-center">
     <blockquote class="blockquote"  style={{height:"80px", fontFamily:'monospace' , letterSpacing: ".0rem",  fontWeight: 700, fontSize:'16px'}}>
       <p >Hi ' my name is Kuldeep Kumar <br></br><span> i am a <Typewriter words={professionWords} loop={5} typeSpeed={40} deleteSpeed={40} cursor /></span> </p>
     </blockquote>
   </figure>
        <p  className="ms-3" style={{fontSize:'12px', height:"150px", width:'120px'}}> <Typewriter words={bio} loop={5} typeSpeed={40} deleteSpeed={40} cursor /> </p>
     <Button variant="outlined" style={{marginLeft:'10px' ,width:"200px", marginTop:'50px',fontSize:'20px'}} startIcon={<WorkIcon />} >
     Hire me
   </Button>
     </div>
     <img src={image} style={{marginTop:'60px', height: 'fit-content', width:'fit-content', overflow:'hidden' }} alt="my" />
     </div>
   </>
  )
}

export default HeroSection;