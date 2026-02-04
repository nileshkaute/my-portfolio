import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      style={{ marginBottom: "80px", padding: "10px", paddingTop: "80px", paddingBottom: "80px" }}
      className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* CENTERED CONTAINER */}
      <div className="w-full max-w-5xl flex flex-col gap-12">

        {/* TOP DIV: Title + Short paragraph */}
        <div className="w-full space-y-4">

          {/* Centered Title */}
          <div className="flex justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-tight outline-text">
              Experi<span className="text-gold drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">ence</span>
            </h2>
          </div>

          {/* Paragraph (left-aligned) */}
          <p
            className="text-warmGray text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0"
            style={{ marginTop: "10px" }}
          >
            Worked as a <span className="text-gold">React.js Developer Intern</span> at The Entrepreneurship Network (TEN), contributing to modern frontend development using React.js and Tailwind CSS. Successfully completed the internship and received LOC and LOR.
          </p>
        </div>

        {/* BOTTOM DIV: LOC + LOR cards */}
        <div 
        style={{padding:"10px"}}
        className="flex flex-col sm:flex-row w-full gap-6">

          {/* LOC */}
          <a href="/LOC.pdf" target="_blank" className="group w-full sm:w-1/2">
            <div className="rounded-xl overflow-hidden hover:scale-105 transition transform text-left">
              <img
                src="/Loc.png"
                alt="LOC"
                className="w-full h-56 object-cover"
              />
              <p className="text-center text-sm text-zinc-400 py-2 uppercase tracking-widest">
                Letter of Completion (LOC)
              </p>
            </div>
          </a>

          {/* LOR */}
          <a href="/LOR.pdf" target="_blank" className="group w-full sm:w-1/2">
            <div className="rounded-xl overflow-hidden hover:scale-105 transition transform text-left">
              <img
                src="/Lor.png"
                alt="LOR"
                className="w-full h-56 object-cover"
              />
              <p className="text-center text-sm text-zinc-400 py-2 uppercase tracking-widest">
                Letter of Recommendation (LOR)
              </p>
            </div>
          </a>

        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
