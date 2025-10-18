import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import project1 from "../assets/images/booknest.png";
import project2 from "../assets/images/Music.png";
import project3 from "../assets/images/movie.png";


const ProjectsSection = () => {
  const projects = [
    { id: 1, title: "Booknest", description: "A full-stack e-commerce bookstore website using HTML, CSS, JavaScript, and JSON.", image: project1, liveLink: "https://booknes-t.netlify.app/" },
    { id: 2, title: "Music_Player", description: "A music player based on Spotify application .", image: project2, liveLink: "#" },
    { id: 3, title: "Movie_Ticket_Booking", description: "A movie ticket booking website user friendly and easy to use.", image: project3, liveLink: "#" },
   
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
     <section id="projects" className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-10 md:space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-3 sm:space-y-4"
          >
            <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 inline-block border-b-4 border-yellow-500 pb-2"style={{marginBottom:"35px"}}>
              My Projects
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl  mx-auto px-2"style={{marginTop:"5px",marginBottom:"15px"}}>
              Here are some of my recent works that reflect my development and design journey.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center w-full" style={{marginTop:"5px",marginBottom:"5px"}}>
            {currentProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 sm:gap-3 pt-3 sm:pt-4"
            style={{marginTop:"30px",marginBottom:"5px"}}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{marginTop:"5px",marginBottom:"5px"}}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center  font-semibold transition-all duration-300 border text-sm sm:text-base ${
                  currentPage === page
                    ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                    : "bg-gray-900 text-gray-300 border-gray-700 hover:border-yellow-500 hover:text-yellow-400"
                    
                }`}
              >
                {page}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
       <motion.div 
             className="w-full flex justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-24 mb-12"
             style={{marginBottom:"20px", marginTop:"100px"}}
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-34 bg-gray-700 opacity-30 rounded-full" />
           </motion.div>
     
    </>
  );
};

export default ProjectsSection;
