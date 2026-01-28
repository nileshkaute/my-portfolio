import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

// Video imports
import video1 from "/videos/EE1.mp4";
import video2 from "/videos/1.mp4";
import video3 from "/videos/1.mp4";

gsap.registerPlugin(ScrollTrigger);

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
  const mainRef = useRef(null);
  const projectsContainerRef = useRef(null);

  const projects = [
    {
      title: "Escalate Essence",
      video: video1,
      techs: ["HTML", "CSS", "JS", "GSAP"],
      description: "A luxury perfume brand website featuring smooth GSAP animations and a full authentication system for an immersive user journey.",
      link: "https://eclat-essence-perfume.vercel.app/",
    },
    {
      title: "BookNest Shop",
      video: video2,
      techs: ["HTML", "CSS", "JavaScript"],
      description: "A clean and responsive online bookstore including a shopping cart and modern UI designed for high performance and readability.",
      link: "https://booknes-t.netlify.app/",
    },
    {
      title: "DocApp Manager",
      video: video3,
      techs: ["React", "Framer", "IndexedDB"],
      description: "A powerful document manager allowing users to store and manage files securely via IndexedDB with high-end motion animations.",
      link: "https://personaldocapp.netlify.app/",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });

      const projectCards = gsap.utils.toArray(".project-wrapper");
      projectCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <motion.div
      ref={mainRef}
      className="relative flex flex-col items-center w-full"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
      id="projects"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        className="flex flex-col items-center gap-6 mb-32 text-center"
        variants={item}
      >
        <h2 className="text-5xl font-anton uppercase tracking-tight outline-text text-white">
          My{" "}
          <span className="text-gold drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">
            Projects
          </span>
        </h2>
        <p className="text-zinc-500 text-lg max-w-2xl text-center leading-relaxed">
          Some of my favorite works that showcase design, functionality, and creativity
        </p>
      </motion.div>

      <div ref={projectsContainerRef} className="w-full flex flex-col items-center gap-24">
        {projects.map((proj, index) => (
          <div 
            key={index} 
            className="project-wrapper w-full flex justify-center"
          >
            <motion.div variants={item} className="w-full flex justify-center">
              <ProjectCard 
                {...proj} 
                reverse={index % 2 !== 0} 
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;