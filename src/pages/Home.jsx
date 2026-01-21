import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";


import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
// import Divider from "../components/Divider";
import Experience from "../components/Exprience";
import Hero from "../components/Hero";
import OtherWork from "../components/OtherWork";
import ScrollingBanner from "../components/ScrollingBanner";

const Home = () => {
  const [showBoxes, setShowBoxes] = useState(false);
  const [textSettled, setTextSettled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const timer = setTimeout(() => setShowBoxes(true), isLargeScreen ? 9500 : 100);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLargeScreen]);


  return (
    <div style={{ overflowX: 'hidden' }} id="home">
      {/* Hero Section */}
      <Hero/>

      {/* Divider */}
      {/* <Divider /> */}

      <AboutSection />

      {/* Divider */}
      {/* <Divider /> */}

      {/* Skills Section */}
      <SkillsSection/>
     
      {/* Divider */}
      {/* <Divider /> */}

      {/* Project Section */}
      <ProjectsSection/>      

      {/* Divider */}
      {/* <Divider /> */}
      <ScrollingBanner/>

      <Experience/> 

      {/* Divider */}
      {/* <Divider  /> */}

      <OtherWork/>  
     
    </div>
  );
};

export default Home;