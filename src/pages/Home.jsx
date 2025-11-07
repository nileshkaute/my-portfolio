import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import profileImage from "../assets/images/prof.png";

import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import Divider from "../components/Divider";

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

  // Enhanced animation variants for smoother transitions
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const slideInFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }} id="home">
      {/* Hero Section */}
   <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="relative flex flex-col items-center justify-center w-full h-[550px] sm:h-[600px] md:h-[680px] lg:h-[800px] bg-black overflow-hidden text-white mb-10 sm:mb-14 md:mb-18 lg:mb-24 mt-3 sm:mt-5 md:mt-7 lg:mt-12"
>

  {/* Moving + Shrinking Text - Only for Large Screens */}
  {isLargeScreen && (
    <motion.div
      className="absolute inset-0 flex justify-center items-center pointer-events-none select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: textSettled ? 1 : 1 }}
    >
      <motion.h1
        initial={{ x: "100vw", y: 0, scale: 1, opacity: 1 }}
        animate={{
          x: ["100vw", "0vw", "0vw"],
          y: ["0%", "0%", "370%"],
          scale: [1, 0.6, 0.3],
          opacity: [1, 1, 1],
        }}
        transition={{
          duration: 6,
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.5, 1],
        }}
        onAnimationComplete={() => {
          setTextSettled(true);
          setShowBoxes(true);
        }}
        className="text-[4rem] font-extrabold text-purple-800 opacity-40 whitespace-nowrap px-4"
      >
        From Logic to Life — I Build What You Imagine.
      </motion.h1>
    </motion.div>
  )}

  {/* Center Image + Circle */}
  <motion.div
    className="relative z-10 flex justify-center items-center"
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
  >
    <motion.div
      className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] lg:w-[600px] lg:h-[600px] xl:w-[650px] xl:h-[650px] bg-purple-700 rounded-full opacity-30 -z-10"
    />
    <div className="relative inline-block p-[2px] sm:p-[3px] md:p-[4px] lg:p-[5px] rounded-full">
      <motion.img
        src={profileImage}
        alt="Profile"
        className="w-[275px] h-[280px] sm:w-[345px] sm:h-[350px] md:w-[475px] md:h-[480px] lg:w-[595px] lg:h-[600px] xl:w-[640px] xl:h-[650px] object-contain rounded-full"
        style={{
          filter: `drop-shadow(0 0 4px rgba(3, 4, 4, 0.62))
                   drop-shadow(0 0 10px rgba(6, 5, 6, 0.74))
                   drop-shadow(0 0 16px rgba(2, 1, 2, 0.85))`,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  </motion.div>

  {/* Left Box - Hidden on mobile/tablet, visible on large screens */}
  {showBoxes && isLargeScreen && (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute left-3 xl:left-10 top-1/2 transform -translate-y-1/2 backdrop-blur-md p-4 xl:p-6 w-[280px] xl:w-[350px] h-[360px] xl:h-[450px] flex flex-col items-center justify-center shadow-lg"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-[3rem] xl:text-[4rem] font-extrabold text-purple-400 opacity-40 w-full text-center leading-tight"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Hello
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          I am
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Nilesh
        </motion.div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-base xl:text-lg text-purple-700 mt-4 text-center"
      >
        A Java Full Stack Developer.
      </motion.p>
    </motion.div>
  )}

  {/* Right Box - Hidden on mobile/tablet, visible on large screens */}
  {showBoxes && isLargeScreen && (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute right-3 xl:right-10 top-1/2 transform -translate-y-1/2 backdrop-blur-md p-4 xl:p-6 w-[280px] xl:w-[350px] h-[280px] xl:h-[350px] flex flex-col items-center justify-center shadow-lg"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-[2.5rem] xl:text-[4rem] font-extrabold text-purple-800 opacity-40 w-full text-center break-words leading-tight"
      >
        I build with emotion
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-sm xl:text-base text-purple-400 mt-3 xl:mt-4 text-center leading-snug"
      >
        Every function, every frame — crafted to connect.
      </motion.p>
    </motion.div>
  )}

  {/* Mobile & Tablet Info Boxes - Only visible on small/medium screens */}
  {showBoxes && !isLargeScreen && (
    <motion.div
      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-5 md:space-y-6 z-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-lg shadow-lg text-center bg-black bg-opacity-20"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 opacity-40 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Hello, I am Nilesh
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 mt-3 sm:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          A Java Full Stack Developer.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-lg shadow-lg text-center bg-black bg-opacity-20"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 opacity-40 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          I build with emotion
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-700 mt-3 sm:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Every function, every frame — crafted to connect.
        </motion.p>
      </motion.div>
    </motion.div>
  )}
</motion.div>

      {/* Divider */}
      <motion.div
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
        style={{ marginBottom: "100px", marginTop: "30px" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Divider />
      </motion.div>

      <AboutSection  />

         {/* Divider */}
      <motion.div
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
        style={{ marginBottom: "100px", marginTop: "30px" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Divider />
      </motion.div>

      {/* Skills Section */}
<SkillsSection/>
     
         {/* Divider */}
      <motion.div
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
        style={{ marginBottom: "100px", marginTop: "30px" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Divider />
      </motion.div>

      {/* Project Section */}
 <ProjectsSection/>      

          {/* Divider */}
      <motion.div
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 "
        style={{  marginTop: "30px" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Divider />
      </motion.div>

     
    </div>
  );
};

export default Home;