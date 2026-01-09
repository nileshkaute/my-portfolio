import React from "react";


const ProjectCard = ({ title, image, techs, description, link }) => {
  return (
  
    <div className="bg-[#0a0a0a] border-2 w-[90vw] sm:w-95 min-h-110 border-zinc-800 rounded-2xl overflow-hidden mb-8 relative backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/25 hover:border-orange-900 group mx-auto">
      {/* Gradient overlay effect */}
      <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden h-[180px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        /> 
      </div>

      {/* Card Body */}
      <div className="relative z-10 gap-3" style={{ padding: "15px" }}>
        <h3
          className="text-xl font-bold mb-3 text-zinc-200 group-hover:text-orange-500 transition-colors duration-500 uppercase tracking-tight"
          style={{ margin: "3px 3px" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-zinc-400 mb-4 leading-relaxed h-20 overflow-hidden"
          style={{ margin: "15px 0 3px 2px" }}
        >
          {description}
        </p>

         {/* Tech Badges */}
        <div className="mb-3 flex flex-wrap gap-2" style={{ margin: "3px 3px" }}>
          {techs.map((tech, index) => (
            <span
              key={index}
              className="inline-block border border-zinc-800 text-zinc-400 text-xs rounded-md hover:text-orange-500 hover:border-orange-800 hover:shadow-[0_0_15px_rgba(255,165,0,0.2)] transition-all duration-500 hover:-translate-y-0.5"
              style={{ padding: "5px 8px", margin: "15px 0 3px 2px" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3 mt-4" style={{ margin: "20px 0 2px 2px" }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "5px 8px" }}
            className="inline-flex items-center px-5 py-2.5 border-2 border-orange-900 text-orange-500 rounded-md text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/40 hover:border-orange-700 hover:text-orange-400"
          >
            Live Demo <i className="fas fa-external-link-alt ml-2 text-xs"></i>
          </a>
        </div>
      </div>


    
    </div>
  );
};

export default ProjectCard;