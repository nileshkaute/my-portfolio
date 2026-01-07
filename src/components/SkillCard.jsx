import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ title, items }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.div
      layout
      className={`
        relative 
        /* --- SIZE CHANGES --- */
        w-full                      /* Full width on mobile */
        max-w-[340px]               /* Prevents it from being too wide on small phones */
        sm:max-w-none sm:w-[350px]  /* Tablet size */
        lg:w-[420px]                /* Desktop size */
        min-h-[260px]               /* Increased min-height to prevent jumping during transition */
        
        border-2 rounded-2xl flex flex-col justify-center items-center overflow-hidden
        transition-colors duration-1000
        ${activeSkill ? "border-orange-900 bg-[#0f0a05] shadow-[inset_0_0_50px_rgba(255,100,0,0.1)]" : "border-zinc-800 bg-[#0a0a0a]"}
      `}
    >
      <AnimatePresence mode="wait">
        {!activeSkill ? (
          /* --- THE DORMANT ARMOR (LIST VIEW) --- */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "brightness(1.5) blur(2px)" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 px-5 py-8 w-full"
          >
            <h1 className="text-lg sm:text-xl font-bold text-zinc-500 tracking-widest uppercase italic">
              {title}
            </h1>
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((skill, index) => (
                <motion.h4
                  key={index}
                  onMouseEnter={() => setActiveSkill(skill)}
                  /* Added padding and better touch target for mobile */
                  className="cursor-pointer text-xs sm:text-sm text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-md hover:text-orange-500 hover:border-orange-800 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,165,0,0.2)]"
                style={{padding:"5px"}}
                >
                  {skill.name}
                </motion.h4>
              ))}
            </div>
          </motion.div>
        ) : (
          /* --- THE FORGED REVEAL (DETAIL VIEW) --- */
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onMouseLeave={() => setActiveSkill(null)}
            className="relative flex flex-col items-center justify-center p-6 sm:p-8 text-center w-full h-full min-h-[260px]"
          >
            {/* Ember/Fire Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.1)_0%,transparent_70%)] animate-pulse" />

            {/* Skill Logo (Forged Initial) */}
            <motion.div 
              initial={{ opacity: 0, y: 10, filter: "drop-shadow(0 0 0px #ff4500)" }}
              animate={{ opacity: 1, y: 0, filter: "drop-shadow(0 0 15px #ff4500)" }}
              transition={{ delay: 0.2, duration: 1 }}
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-full border-2 border-orange-700 flex items-center justify-center bg-zinc-900 shadow-2xl"
            >
              <span className="text-2xl sm:text-3xl font-black text-orange-600 drop-shadow-lg">
                {activeSkill.name.charAt(0)}
              </span>
            </motion.div>

            {/* Title (Engraved) */}
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.05em" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl font-bold text-orange-100 uppercase tracking-tight mb-2"
            >
              {activeSkill.name}
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-orange-200/60 text-xs sm:text-sm leading-relaxed max-w-[280px] font-serif italic"
            >
              {activeSkill.desc || `Wielding the power of ${activeSkill.name} to forge legendary digital experiences.`}
            </motion.p>

            {/* Bottom Accent */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-[2px] bg-orange-700 mt-6 shadow-[0_0_10px_#ff4500]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillCard;