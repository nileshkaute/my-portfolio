import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", progress: 95 },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", progress: 90 },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", progress: 85 },
    { name: "React", image: "https://tse1.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=Api&P=0&h=180", progress: 80 },
    { name: "Tailwind CSS", image: "https://w7.pngwing.com/pngs/771/978/png-transparent-tailwind-css-css-framework-customizable-low-level-tailwind-logo-3d-icon.png", progress: 90 },
    { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", progress: 80 },
    { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", progress: 85 },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", progress: 75 },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", progress: 75 },
    { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", progress: 80 },
    { name: "Framer Motion", image: "https://attact.co/_next/image?url=%2Fframer-motion-logo.png&w=1080&q=75", progress: 70 },
    { name: "GSAP", image: "https://www.marquisedawkins.com/images/greensock.png", progress: 65 }
  ];

  const learning = [
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", progress: 40 },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", progress: 50 },
    { name: "Three.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", progress: 30 },
  ];

  return (
    <>
      <motion.section
        id="skills"
        className="flex items-center justify-center h-auto sm:px-8 md:px-12 lg:px-16"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl w-full">
          {/* Section Title */}
          <motion.div
            className="text-center flex flex-col gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 inline-block border-b-4 hover:border-purple-500 pb-2">
                My <span className="text-purple-700">Skills</span>
              </h2>
            </div>

            <div className="flex justify-center">
              <p className="text-gray-400 text-lg max-w-2xl text-center leading-relaxed mb-20 px-4" style={{ marginBottom: "10px" }}>
                Technologies and tools I work with to create amazing digital experiences
              </p>
            </div>
          </motion.div>

          {/* Skill Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center px-4 mt-15"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, index) => (
  <motion.div
    key={skill.name}
    initial={{
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80, // even index → from left, odd index → from right
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <SkillCard skill={skill} index={index} />
  </motion.div>
))}

          </motion.div>

          {/* ---------- Currently Learning Section ---------- */}
         <motion.div
  className="text-center "
  style={{marginTop:"35px"}}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 border-b-4 inline-block pb-2 border-purple-500" style={{ marginBottom: "10px" }}>
    Currently <span className="text-purple-700">Learning</span>
  </h3>
            <div className="flex justify-center">
              <p className="text-gray-400 text-lg max-w-xl mx-auto mt-6 mb-10 px-4 text-center" style={{ marginBottom: "10px" }}>
                Technologies I’m currently exploring to expand my development skills
              </p>
            </div>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center px-4 mt-15"
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
  >
    {[
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    progress: 20,
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    progress: 35,
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    progress: 45,
  },
  {
    name: "Express.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    progress: 40,
  },
].map((item, index) => (
  <motion.div
    key={item.name}
    initial={{
      opacity: 0,
      x: index < 2 ? -80 : 80, // first 2 from left, last 2 from right
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <SkillCard skill={item} index={index} />
  </motion.div>
))}

  </motion.div>
</motion.div>

        </div>
      </motion.section>
    </>
  );
};

export default SkillsSection;
