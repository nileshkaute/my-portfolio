import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
  { name: "HTML", desc: "Forging the iron-clad structure of the web." },
  { name: "CSS", desc: "Draping the architecture in aesthetics and royal style." },
  { name: "JavaScript", desc: "Infusing the soul and movement into the digital stone." },
  { name: "React", desc: "Constructing modular kingdoms that grow and adapt." },
  { name: "Tailwind CSS", desc: "Striking with lightning speed and utility-first precision." },
  { name: "Bootstrap", desc: "Defending layouts with time-tested responsive armor." },
  { name: "Framer Motion", desc: "Mastering the art of cinematic motion and flow." },
  { name: "GSAP", desc: "Orchestrating epic timelines of visual grandeur." },
  { name: "Node.js", desc: "The silent engine powering the vast backend empires." },
  { name: "Express.js", desc: "Connecting the realms with swift and secure gateways." },
  { name: "Java", desc: "Solid, ancient, and unbreakable enterprise logic." },
  { name: "MySQL", desc: "The deep vault where the kingdom's truth is stored." },
  { name: "GitHub", desc: "The grand chronicle of every battle fought in code." },
  { name: "VS code", desc: "The forge where ideas are hammered into reality." },
  { name: "Figma", desc: "The visionary scroll where blueprints are born." },
];

const learning = [
  { name: "Next.js", desc: "Mastering the future of full-stack conquest." },
  { name: "TypeScript", desc: "Adding sacred scripts for error-free reliability." },
  { name: "Three.js", desc: "Opening the gates to the 3rd dimension." },
];

const SkillsSection = () => {
  const frontend = skills.slice(0, 8);
  const backend = skills.slice(8, 12);
  const technologies = skills.slice(12, 15);

  return (
    <div id="skills" className="flex flex-col gap-12 justify-center items-center w-full" style={{ paddingTop: "80px", paddingBottom: "80px", marginBottom: "40px" }}>
      {/* Cinematic Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-5xl  font-anton uppercase tracking-tight outline-text">
          Mastery & <span className="text-gold drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">Arsenal</span>
        </h2>
        <div className="h-1 w-24 bg-gold mx-auto mt-4 blur-[1px]" />
      </motion.div>

      {/* Content Wrapper */}
      <div className="flex flex-col gap-8 w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          <SkillCard title="The Vanguard (Frontend)" items={frontend} />
          <SkillCard title="The Foundation (Backend)" items={backend} />
        </div>

         <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          <SkillCard title="The Tools of War" items={technologies} />
           <SkillCard title="Future Conquests" items={learning} />
        </div>

      
      </div>
    </div>
  );
};

export default SkillsSection;