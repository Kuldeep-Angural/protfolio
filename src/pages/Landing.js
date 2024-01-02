import React from "react";
import HeroSection from "../pages/HeroSection";
import SkillsSection from "./SkillsSection";


const Landing = () => {
  return (
    <>
    <div className="col-md-12">
      <HeroSection />

    </div>

    <div className="col-md-12">
      <p className="text-center mt-5" style={{fontFamily: "monospace",fontWeight: 700, fontSize:'20px',letterSpacing: ".3rem",color: "inherit",textDecoration: "none" , marginTop:'200px'}}>Skills</p>
      <SkillsSection/>
    </div>
    </>
  );
};

export default Landing;
