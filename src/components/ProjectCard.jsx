import React from "react";

const ProjectCard = ({ title, image, techs, description, link, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-12 md:gap-24 mb-60 w-full max-w-7xl mx-auto px-6 min-h-[70vh] antialiased`}>
      
      {/* Image Side - Styled with a "Frame" effect */}
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Outer Frame: Subtle border and glow */}
        <div className="relative w-full aspect-[16/10] p-1 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.02]">
          
          {/* Inner Frame: Clipping and glass effect */}
          <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5">
            <img
              src={image}
              alt={title}
              className="w-full  object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Glossy Overlay (Brewery Style) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 flex flex-col ${reverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techs.map((tech, index) => (
            <span key={index} className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold whitespace-nowrap">
              {tech} {index !== techs.length - 1 && "•"}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-6xl md:text-8xl font-anton uppercase tracking-tighter mb-8 leading-[0.85] text-white max-w-[500px]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-[450px]">
          {description}
        </p>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{padding:"5px"}}
          className="inline-flex items-center border-2 border-orange-600 text-orange-500 rounded-sm text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:bg-orange-600 hover:text-white"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;