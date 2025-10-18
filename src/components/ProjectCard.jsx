import React from "react";
import { motion } from "framer-motion";
import '../styles/Buttons.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-black/30 backdrop-blur-sm overflow-hidden flex justify-center items-center text-center flex-col border border-gray-600 hover:border-yellow-400 transition-all duration-300 w-full max-w-[250px] sm:max-w-[260px] h-auto min-h-[320px] hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2"
    >
      {/* Project Image Container */}
      <div className="w-full h-32 sm:h-36 overflow-hidden relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-400 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-3 sm:p-4 " style={{marginTop:"10px"}}>
        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Button */}
        <div className="mt-auto flex justify-center" style={{marginBottom:"20px"}}>
          <button className="water-btn w-30 font-medium overflow-hidden h-8 sm:h-9 text-xs sm:text-sm flex items-center justify-center bg-gray-500 hover:bg-yellow-400 text-white hover:text-black transition-all duration-300 rounded-md hover:scale-105 active:scale-95">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <span className="button-text">View Project</span> 
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
