import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import profileImage from "../assets/images/prof.png";
import ProjectSection from "../components/ProjectsSection";

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
    <div style={{ overflowX: 'hidden' }} id="/">
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
                duration: 10,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.5, 1],
              }}
              onAnimationComplete={() => setTextSettled(true)}
              className="text-[4rem] font-extrabold text-gray-800 opacity-40 whitespace-nowrap px-4"
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
            className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] lg:w-[600px] lg:h-[600px] xl:w-[650px] xl:h-[650px] bg-gray-700 rounded-full opacity-30 -z-10"
            // animate={{ rotate: 360 }}
            // transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
            {...slideInFromLeft}
            className="absolute left-3 xl:left-10 top-1/2 transform -translate-y-1/2 backdrop-blur-md p-4 xl:p-6 w-[280px] xl:w-[350px] h-[360px] xl:h-[450px] flex flex-col items-center justify-center shadow-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[3rem] xl:text-[4rem] font-extrabold text-gray-800 opacity-40 w-full text-center leading-tight"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Hello
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                I am
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Nilesh
              </motion.div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-base xl:text-lg text-gray-700 mt-4 text-center"
            >
              A Java Full Stack Developer.
            </motion.p>
          </motion.div>
        )}

        {/* Right Box - Hidden on mobile/tablet, visible on large screens */}
        {showBoxes && isLargeScreen && (
          <motion.div
            {...slideInFromRight}
            className="absolute right-3 xl:right-10 top-1/2 transform -translate-y-1/2 backdrop-blur-md p-4 xl:p-6 w-[280px] xl:w-[350px] h-[280px] xl:h-[350px] flex flex-col items-center justify-center shadow-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[2.5rem] xl:text-[4rem] font-extrabold text-gray-800 opacity-40 w-full text-center break-words leading-tight"
            >
              I build with emotion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-sm xl:text-base text-gray-700 mt-3 xl:mt-4 text-center leading-snug"
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
        style={{marginBottom:"100px", marginTop:"30px"}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-34 bg-gray-700 opacity-30 rounded-full" />
      </motion.div>

    <motion.section 
  id="about"
  className="flex items-center justify-center py-16 bg-gray-500 text-gray-900 px-4 sm:px-8 md:px-12 h-auto min-h-[250px] sm:min-h-[340px] md:min-h-[350px] lg:min-h-[400px]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  <div className="max-w-6xl w-full text-center">
    {/* Title - Always Centered */}
    <motion.div 
      className="mb-6 sm:mb-8 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold inline-block border-b-4 border-yellow-500 pb-2" style={{marginBottom:"10px"}}>
        -About
      </h2>
    </motion.div>

    {/* About Text - Always Centered */}
    <motion.div 
      className="text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <p className="text-sm sm:text-base md:text-lg lg:text-xl inline-block leading-relaxed text-gray-800 max-w-4xl mx-auto">
        I'm a web developer with a passion for building responsive and dynamic applications that feel smooth and intuitive.  
        I enjoy solving problems and learning through hands-on experience.  
        I focus on writing clean code and improving with every project. 
        I'm known for being <span className="text-yellow-400 font-semibold">trustworthy</span>, <span className="text-yellow-400 font-semibold">creative</span>, and a clear <span className="text-yellow-400 font-semibold">communicator</span>.  
        I care about teamwork, thoughtful design, and meaningful results.  
        My goal is to keep growing and contribute to work that makes a difference.
      </p>
    </motion.div>
  </div>
</motion.section>

      {/* Divider */}
      <motion.div 
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
        style={{marginBottom:"100px", marginTop:"100px"}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-34 bg-gray-700 opacity-30 rounded-full" />
      </motion.div>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="flex items-center justify-center py-16 px-4 sm:px-8 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-6xl w-full text-center">
          {/* Title */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 inline-block border-b-4 border-yellow-500 pb-2" style={{marginBottom:"20px"}}>
              -Skills
            </h2>
          </motion.div>

          {/* Skill Icon Grid */}
          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", desc: "Write backend & OOP programs" },
              { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", desc: "Manage & query databases" },
              { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", desc: "Create responsive layouts" },
              { name: "Tailwind CSS", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png", desc: "Style websites easily" },
              { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", desc: "Build website structure" },
              { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", desc: "Style websites beautifully" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", desc: "Add interactivity to web" },
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "Build dynamic web apps" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", desc: "Build server-side apps" },
              { name: "Responsive Design", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png", desc: "Make sites fit all screens" },
              { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-1.svg", desc: "Animate React components" },
              { name: "GSAP", icon: "https://www.nicepng.com/png/detail/949-9490768_short-instructional-screencast-video-tutorials-for-gsap-logo.png", desc: "Create advanced animations" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="w-30 h-35 sm:w-24 bg-gray-800 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-3 hover:bg-gray-750"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-7 h-7 sm:w-12 sm:h-12 object-contain mb-3"
                />
                <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight">{skill.name}</h3>
                <p className="text-gray-400 text-xs mt-1 leading-tight">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <motion.div 
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
        style={{marginBottom:"100px", marginTop:"100px"}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-34 bg-gray-700 opacity-30 rounded-full" />
      </motion.div>

      {/* Services Section */}
<motion.section 
  id="services"
  className="flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] bg-gray-500 text-gray-900 px-3 sm:px-4 py-8 sm:py-12 md:py-16"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  <div className="max-w-5xl w-full text-center"> {/* Slightly wider container */}
    {/* Title - Centered for all screen sizes */}
    <motion.div 
      className="mb-6 sm:mb-10 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline-block border-b-4 border-yellow-500 pb-2 leading-tight" style={{marginBottom:"10px"}}> 
        -Services
      </h2>
    </motion.div>

    {/* Services List - Optimized for small screens */}
    <div className="flex  sm:flex-row justify-center items-stretch p-2 ml-2 mr-2 sm:p-4 md:p-5 lg:p-6 gap-5 sm:gap-4 md:gap-6 lg:gap-10 text-center w-full">
      {[
        {
          title: "Web Development",
          description: "Building responsive and dynamic websites with clean code."
        },
        {
          title: "UI/UX Design",
          description: "Creating smooth, intuitive, and visually appealing interfaces."
        },
        {
          title: "Project Consultation",
          description: "Helping plan, structure, and scale web projects efficiently."
        }
      ].map((service, index) => (
        <motion.div 
          key={service.title}
          className="flex-1 min-w-0 max-w-full sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] xl:max-w-[260px] min-h-[140px] sm:min-h-[160px] md:min-h-[170px] lg:min-h-[180px] bg-gray-600 rounded-lg p-3 sm:p-4 md:p-5 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: index * 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
        >
          <h3 className="text-yellow-400 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 leading-snug"style={{marginTop:"10px",marginBottom:"20px"}}>
            {service.title}
          </h3>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      {/* Divider */}
      <motion.div 
        className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
        style={{marginBottom:"100px", marginTop:"100px"}}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-34 bg-gray-700 opacity-30 rounded-full" />
      </motion.div>

      {/* Project Section */}
      <ProjectSection />
    </div>
  );
};

export default Home;