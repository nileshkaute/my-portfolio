import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import img1 from '../assets/images/EE.png';
import img2 from '../assets/images/booknest.png';

import img3 from '../assets/images/docapp.png';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], when: 'beforeChildren', staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const ProjectsSection = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center py-12" id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      {/* Section Title - Styled Like Skills */}
      <motion.div className="flex flex-col items-center gap-6 mb-10 text-center" variants={item}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 border-b-4 border-gray-200 hover:border-purple-500 pb-2 w-fit">
          My <span className="text-purple-700">Projects</span>
        </h2>
        <p className="text-gray-400  text-lg max-w-2xl text-center leading-relaxed" style={{marginBottom:"10px"}}>
          Some of my favorite works that showcase design, functionality, and creativity
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 p-8" variants={container}>
        <motion.div variants={item}>
          <ProjectCard
            title="Escalate Essence - Luxury Perfume"
            image={img1}
            techs={["HTML", "CSS", "JavaScript", "GSAP"]}
            description="A luxury perfume brand website featuring smooth GSAP animations, responsive design, and full authentication system for an immersive user experience."
            link="https://eclat-essence-perfume.vercel.app/"
          />
        </motion.div>

        <motion.div variants={item}>
          <ProjectCard
            title="BookNest - Online Bookstore"
            image={img2}
            techs={["HTML", "CSS", "JavaScript"]}
            description="A clean and responsive online bookstore built using HTML, CSS, and JavaScript. Includes a shopping cart, product filtering, and modern UI for readers."
            link="https://booknes-t.netlify.app/"
          />
        </motion.div>

        <motion.div variants={item}>
          <ProjectCard
            title="DocApp - Document Manager"
            image={img3}
            techs={["React", "Framer Motion", "IndexedDB"]}
            description="A powerful document manager built in React with Framer Motion animations. It allows users to store, view, and manage files securely using IndexedDB."
            link="https://personaldocapp.netlify.app/"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
