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
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  const exploring = [
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Three.js", url: "https://www.vectorlogo.zone/logos/threejs/threejs-icon.svg" },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Select all skill rows within the container
      const rows = gsap.utils.toArray(".skill-row-trigger");

      rows.forEach((row, i) => {
        gsap.fromTo(row, 
          { opacity: 0, x: -50 }, 
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%", // Starts when the row is near the bottom
              end: "top 50%",   // Ends when row reaches the middle
              scrub: true,      // Ties animation to scroll speed
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // Optional: Pin the whole section while scrolling through rows
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000", // Adjust this value to control how long it stays pinned
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });

    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div 
      id="skills" 
      ref={sectionRef}
      className="flex flex-col gap-20 justify-center items-center w-full bg-[#0a0a0a]" 
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      
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

      <div ref={containerRef} className="flex flex-col gap-14 w-full px-6 md:px-20 max-w-7xl">
        {/* Added the 'skill-row-trigger' class so GSAP can target them */}
        <div className="skill-row-trigger"><SkillRow label="frontend" items={frontend} /></div>
        <div className="skill-row-trigger"><SkillRow label="backend" items={backend} /></div>
        <div className="skill-row-trigger"><SkillRow label="exploring" items={exploring} /></div>
      </div>

    </div>
  );
};

export default SkillsSection;