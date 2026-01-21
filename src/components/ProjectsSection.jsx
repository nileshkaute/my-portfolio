import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import img1 from "/images/EE.png";
import img2 from "/images/booknest.png";
import img3 from "/images/docapp.png";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Escalate Essence",
      image: img1,
      techs: ["HTML", "CSS", "JS", "GSAP"],
      description: "A luxury perfume brand website featuring smooth GSAP animations and a full authentication system for an immersive user journey.",
      link: "https://eclat-essence-perfume.vercel.app/",
    },
    {
      title: "BookNest Shop",
      image: img2,
      techs: ["HTML", "CSS", "JavaScript"],
      description: "A clean and responsive online bookstore including a shopping cart and modern UI designed for high performance and readability.",
      link: "https://booknes-t.netlify.app/",
    },
    {
      title: "DocApp Manager",
      image: img3,
      techs: ["React", "Framer", "IndexedDB"],
      description: "A powerful document manager allowing users to store and manage files securely via IndexedDB with high-end motion animations.",
      link: "https://personaldocapp.netlify.app/",
    },

  ];

  return (
    <motion.div
      className="relative flex flex-col items-center w-full"
      style={{ paddingTop: "80px", paddingBottom: "80px", marginBottom: "40px" }}
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      {/* HEADER SECTION - REMAINING UNCHANGED */}
      <motion.div
        className="flex flex-col items-center gap-6 mb-40 text-center"
        variants={item}
      >
        <h2 className="text-5xl font-anton uppercase tracking-tight outline-text">
          My{" "}
          <span className="text-gold drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">
            Projects
          </span>
        </h2>
        <p className="text-stone text-lg max-w-2xl text-center leading-relaxed">
          Some of my favorite works that showcase design, functionality, and creativity
        </p>
      </motion.div>

      {/* PROJECT FLOW SECTION - CENTERED */}
      <div className="w-full flex flex-col items-center">
        {projects.map((proj, index) => (
          <motion.div key={index} variants={item} className="w-full flex justify-center">
            <ProjectCard 
              {...proj} 
              reverse={index % 2 !== 0} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;