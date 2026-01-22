import React from "react";
import { motion } from "framer-motion";

const SkillRow = ({ label, items }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full max-w-6xl py-2">
    {/* Label */}
    <div className="min-w-[140px] md:text-right">
      <span
      style={{padding:"3px"}}
       className=" border border-zinc-800 text-zinc-500 rounded-md text-sm font-bold tracking-[0.2em] uppercase italic bg-[#0a0a0a]">
        {label}
      </span>
    </div>

    {/* Icons Grid */}
    <div className="flex flex-wrap gap-4 items-center">
      {items.map((skill, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5, scale: 1.05 }}
          /* FIX: Removed 'overflow-hidden' so tooltip isn't cut off */
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#0d0d0d] border border-zinc-800 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-orange-500/50 transition-all duration-500"
        >
          {/* Online Image URL */}
          <img 
            src={skill.url} 
            alt={skill.name}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300"
          />
          
          {/* Tooltip - Added centering logic and higher Z-index */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 text-orange-400 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest z-50 border border-orange-900/30 whitespace-nowrap shadow-xl pointer-events-none">
            {skill.name}
          </span>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-xl bg-orange-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default SkillRow;