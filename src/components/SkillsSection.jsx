import React from "react";
import { motion } from "framer-motion";

const SkillRow = ({ label, items }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full max-w-6xl py-2">
    {/* Label */}
    <div className="min-w-[140px] md:text-right">
      <span className="px-3 py-1 border border-zinc-800 text-zinc-500 rounded-md text-sm font-bold tracking-[0.2em] uppercase italic bg-[#0a0a0a]">
        {label}
      </span>
    </div>

    {/* Icons Grid */}
    <div className="flex flex-wrap gap-4 items-center">
      {items.map((skill, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5, scale: 1.05 }}
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#0d0d0d] border border-zinc-800 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
        >
          {/* Online Image URL - Using SVGs for perfection */}
          <img 
            src={skill.url} 
            alt={skill.name}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300"
          />
          
          {/* Tooltip */}
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 text-orange-400 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest z-10 border border-orange-900/30 whitespace-nowrap shadow-xl pointer-events-none">
            {skill.name}
          </span>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-xl bg-orange-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  // Online SVG URLs from SimpleIcons CDN
  const frontend = [
    { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Framer Motion", url: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
    { name: "GSAP", url: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
  ];

  const backend = [
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  const exploring = [
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Three.js", url: "https://www.vectorlogo.zone/logos/threejs/threejs-icon.svg" },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <div id="skills" className="flex flex-col gap-20 justify-center items-center w-full bg-[#0a0a0a]" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl font-anton uppercase tracking-tight outline-text text-white">
          Mastery & <span className="text-gold drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">Arsenal</span>
        </h2>
        <div className="h-1 w-24 bg-gold mx-auto mt-4 blur-[1px]" />
      </motion.div>

      <div className="flex flex-col gap-14 w-full px-6 md:px-20 max-w-7xl">
        <SkillRow label="frontend" items={frontend} />
        <SkillRow label="backend" items={backend} />
        <SkillRow label="exploring" items={exploring} />
      </div>

    </div>
  );
};

export default SkillsSection;