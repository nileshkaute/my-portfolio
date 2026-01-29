import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillRow from "./SkillRow";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

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
    { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  ];

  const tools = [
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ];

  const exploring = [
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Three.js", url: "https://www.vectorlogo.zone/logos/threejs/threejs-icon.svg" },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Create the Master Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Increased slightly for 4 rows
          pin: true,
          pinSpacing: true,
          scrub: 1, 
          anticipatePin: 1,
        },
      });

      // 2. Animate the Header first
      tl.from(".skills-header", { 
        opacity: 0, 
        y: 30, 
        duration: 0.8 
      });

      // 3. Reveal Skill Rows one-by-one
      const rows = gsap.utils.toArray(".skill-row-trigger");
      rows.forEach((row, i) => {
        tl.fromTo(
          row,
          { 
            opacity: 0, 
            x: -40, 
            filter: "blur(10px)" 
          },
          { 
            opacity: 1, 
            x: 0, 
            filter: "blur(0px)", 
            duration: 1,
            ease: "power2.out"
          },
          "-=0.5" // Smooth overlap
        );
      });

      tl.to({}, { duration: 1 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="skills" 
      ref={sectionRef}
      className="relative flex flex-col gap-16 justify-center items-center w-full bg-[#0a0a0a] min-h-screen z-20" 
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,77,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="skills-header text-center relative z-10">
        <h2 className="text-5xl font-anton uppercase tracking-tight outline-text text-white">
          Mastery & <span className="text-gold drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">Arsenal</span>
        </h2>
        <div className="h-1 w-24 bg-gold mx-auto mt-4 blur-[1px]" />
      </div>

      <div ref={containerRef} className="flex flex-col gap-10 w-full px-6 md:px-20 max-w-7xl relative z-10">
        <div className="skill-row-trigger">
          <SkillRow label="frontend" items={frontend} />
        </div>
        <div className="skill-row-trigger">
          <SkillRow label="backend" items={backend} />
        </div>
        <div className="skill-row-trigger">
          <SkillRow label="tools" items={tools} />
        </div>
        <div className="skill-row-trigger">
          <SkillRow label="exploring" items={exploring} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;