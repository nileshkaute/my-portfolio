import React from "react";

const ProjectCard = ({ title, video, techs, description, link, reverse }) => {
  return (
    /* Reduced max-w from 1400px to 1200px and gap from 16 to 12 */
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-10 md:gap-12 mb-32 sm:mb-40 md:mb-60 w-full max-w-[1200px] mx-auto px-6 min-h-[60vh] antialiased`}>
      
      {/* Video Side - Kept at 65% but container is smaller now */}
      <div className="w-full md:w-[65%] flex justify-center">
        <div className="relative w-full aspect-video p-1 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-700/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.01]">
          
          <div className="relative w-full h-full overflow-hidden rounded-xl bg-black flex items-center justify-center border border-white/5">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-30" />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-[35%] flex flex-col ${reverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech, index) => (
            <span key={index} className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold whitespace-nowrap">
              {tech} {index !== techs.length - 1 && "•"}
            </span>
          ))}
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton uppercase tracking-tighter mb-6 leading-[0.9] text-white">
          {title}
        </h3>
        
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-[350px]">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 inline-flex items-center border-2 border-orange-600 text-orange-500 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:bg-orange-600 hover:text-white"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;