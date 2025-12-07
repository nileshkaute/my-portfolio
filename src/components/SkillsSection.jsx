import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "Framer Motion" },
  { name: "GSAP" },

  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Java" },
  { name: "MySQL" },

  { name: "GitHub" },
  { name: "VS code" },
  { name: "Figma" },
];

const learning = [
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Three.js" },
];

const SkillsSection = () => {
  const frontend = skills.slice(0, 8);
  const backend = skills.slice(8, 12);
  const technologies = skills.slice(12, 15);

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full "style={{padding:"20px"}}>
      {/* Heading */}
      <motion.div
        className="mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 inline-block border-b-4 hover:border-purple-500 pb-2">
          What I <span className="text-purple-700">Work With</span>
        </h2>
      </motion.div>

      {/* Content Wrapper */}
      <div className="flex flex-col gap-6 w-full px-4 md:px-8">

        {/* Frontend + Backend Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
          <SkillCard title="Frontend Skills" items={frontend} />
          <SkillCard title="Backend Skills" items={backend} />
        </div>

        {/* Technologies */}
        <div className="flex justify-center w-full">
          <SkillCard title="Technologies" items={technologies} />
        </div>

        {/* Learning Section */}
        <div className="flex flex-col gap-3 w-full text-center">
          <h1 className="text-xl font-semibold text-gray-200">Currently Learning</h1>
          <div className="flex justify-center">
            <SkillCard title="Learning..." items={learning} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsSection;
