import React from "react";
import { motion } from "framer-motion";
import SkillRow from "./SkillRow";



const SkillsSection = () => {
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