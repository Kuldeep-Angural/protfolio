import WorkIcon from '@mui/icons-material/Work';
import { Card, CardContent, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { bio, professionWords } from '../constants/informationText';
import image from '../images/roundBg.png';
import AppModal from '../component/Modal';
const HeroSection = () => {



  const [modalOpen, setModalOpen] = useState(false);


  const actionHirebutton = () => {
setModalOpen(true)

  }

  const getModalData = (data) => {
    console.log(data);
  }


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  
  
  
  return (
    <>
    <AppModal  open={modalOpen}
        onClose={handleCloseModal}
        title="Example Modal"
        getData={getModalData}
        content="This is some example content for the modal."/>
      <Grid  style={{ marginTop: '15px', height: '120vh', justifyContent: 'center' }}>
        <Grid xs={12} md={12}>
          <Card style={{ height:'100vh', justifyContent: 'center', }}>
            <CardContent style={{ minHeight: '100%' }}>
                <Grid item xs={12} md={8}>
                  <Grid  container spacing={0} xs={12} md={12} style={{height:"400px",justifyContent: 'center' }} >
                    <Grid  xs={2} md={8} style={{ display: 'flex', aligns: 'center' }} >
                    <blockquote class="blockquote"  style={{ fontFamily:'monospace' , letterSpacing: ".0rem",  fontWeight: 700, fontSize:'30px',marginLeft:'10px' , height:'450px', minWidth:"400px",}}>
                   <img src={image} height={350} style={{border:'2px solid ', color:'inherit', borderRadius:'50%',marginLeft:'6px'}} alt='myImg'/>
                     <p  style={{height:"170px"}} className=' mb-5 '>Hi'my name is Kuldeep Kumar <br></br><span> i am a <Typewriter words={professionWords} loop={5} typeSpeed={40} deleteSpeed={40} cursor /></span> </p>
                       <p  className="mt-1 w-100 " style={{fontSize:'18px', height:"150px", width:'250px'}}>{bio} </p>
                       <Button variant="outlined" style={{marginLeft:'60px' ,width:"250px", marginTop:'60px',fontSize:'20px',color:'inherit'}}  onClick={actionHirebutton} startIcon={<WorkIcon />} >Hire me </Button>
                    </blockquote>
                    </Grid>
                   
                    <Grid item xs={10} md={10} style={{position:"relative",top:"100"}}>
                    </Grid>
                  </Grid>
                </Grid>
               
            </CardContent>
          </Card>
          
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;

{
  /* <blockquote class="blockquote"  style={{ fontFamily:'monospace' , letterSpacing: ".0rem",  fontWeight: 700, fontSize:'16px'}}>
       <p >Hi ' my name is Kuldeep Kumar <br></br><span> i am a <Typewriter words={professionWords} loop={5} typeSpeed={40} deleteSpeed={40} cursor /></span> </p>
     </blockquote>
        <p  className="ms-3" style={{fontSize:'12px', height:"150px", width:'120px'}}> <Typewriter words={bio} loop={5} typeSpeed={40} deleteSpeed={40} cursor /> </p>
     <Button variant="outlined" style={{marginLeft:'10px' ,width:"200px", marginTop:'50px',fontSize:'20px'}} startIcon={<WorkIcon />} >
     Hire me
   </Button>
     <img src={image} style={{marginTop:'60px', height: 'fit-content', width:'fit-content', overflow:'hidden' }} alt="my" /> */
}
