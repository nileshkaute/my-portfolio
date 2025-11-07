import React from "react";

const ProjectCard = ({ title, image, techs, description, link }) => {
  return (
    <div className="bg-white/5 border w-95 h-110 border-white/10 rounded overflow-hidden mb-8  relative backdrop-blur-md transition-all duration-500  hover:shadow-2xl hover:shadow-black-600/25  group">
      {/* Gradient overlay effect */}
      <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden h-[180px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:shadow-blac"
        /> 
      </div>

      {/* Card Body */}
      <div className="relative z-10 gap-3" style={{ padding: "15px" }}>
        <h3
          className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300"
          style={{ margin: "3px 3px" }}
        >
          {title}
        </h3>

       

        {/* Description */}
        <p
          className="text-gray-400 mb-4 leading-relaxed h-20 overflow-hidden"
          style={{ margin: "15px 0 3px 2px" }}
        >
          {description}
        </p>

         {/* Tech Badges */}
        <div className="mb-3 flex flex-wrap gap-2" style={{ margin: "3px 3px" }}>
          {techs.map((tech, index) => (
            <span
              key={index}
              className="inline-block border border-purple-500 text-purple-400 text-xs rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:-translate-y-0.5"
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
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r border border-purple-600 text-purple-500 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-300/40"
          >
            Live Demo <i className="fas fa-external-link-alt ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
