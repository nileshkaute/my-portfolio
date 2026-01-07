import React from "react";
import { motion } from "framer-motion";

export default function ScreenLoader() {
  // Config for the 4 sliding columns
  const columnVariants = {
    initial: { y: 0 },
    exit: (i) => ({
      y: "-100%",
      transition: {
        duration: 0.8,
        delay: i * 0.1, // Staggered effect
        ease: [0.645, 0.045, 0.355, 1], // Smooth cubic-bezier
      },
    }),
  };

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      
      {/* 1. STAGGERED PANELS (The "Curtains") */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={columnVariants}
            initial="initial"
            exit="exit"
            className="h-full flex-1 bg-[#080808] border-r border-zinc-900/30"
          />
        ))}
      </div>

      {/* 2. CENTRAL ANIMATION (The "Forge") */}
      <motion.div 
        className="relative z-[110] flex flex-col items-center"
        exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        transition={{ duration: 0.4 }}
      >
        {/* SVG Path Drawing Logo */}
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <motion.path
            d="M20 20 L80 20 L80 80 L20 80 Z" // Outer Box
            stroke="#c2410c"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M50 10 L50 90 M10 50 L90 50" // Crosshair
            stroke="#18181b"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="50" cy="50" r="4" 
            fill="#c2410c"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>

        {/* Branding with Mask Effect */}
        <div className="mt-10 overflow-hidden">
          <motion.h1 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-white text-3xl font-black italic tracking-[-0.1em] uppercase leading-none"
          >
            NILESH <span className="text-orange-700">KAUTE</span>
          </motion.h1>
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="w-full h-[2px] bg-orange-700 mt-2 origin-left"
          />
        </div>

        {/* Tactical HUD Coordinates */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex gap-10 font-mono text-[8px] text-zinc-600 tracking-[0.4em] uppercase"
        >
          <span>LN // 19.1086</span>
          <span className="text-orange-900">BOOTING_LAB</span>
          <span>LG // 73.0084</span>
        </motion.div>
      </motion.div>

      {/* 3. SCANNER LINE (High-Speed Detail) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-orange-600/30 z-[120]"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}