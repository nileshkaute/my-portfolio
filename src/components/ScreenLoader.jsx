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
        delay: i * 0.1,
        ease: [0.645, 0.045, 0.355, 1],
      },
    }),
  };

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none bg-mocha-900">
      
      {/* STAGGERED PANELS - Mocha theme */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={columnVariants}
            initial="initial"
            exit="exit"
            className="h-full flex-1 bg-mocha-900 border-r border-gold/10"
          />
        ))}
      </div>

      {/* CENTRAL LOADING ANIMATION */}
      <motion.div 
        className="relative z-[110] flex flex-col items-center"
        exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        transition={{ duration: 0.4 }}
      >
        {/* Elegant SVG Animation */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {/* Outer elegant circle */}
          <motion.circle 
            cx="60" cy="60" r="50" 
            stroke="#C9A24D"
            strokeWidth="1.5"
            fill="none"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Inner rotating circle */}
          <motion.circle 
            cx="60" cy="60" r="35" 
            stroke="#C9A24D"
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0], rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "60px 60px" }}
          />

          {/* Center pulse */}
          <motion.circle 
            cx="60" cy="60" r="5" 
            fill="#C9A24D"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>

        {/* Brand Name with smooth animation */}
        <div className="mt-12 text-center overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-ivory text-2xl font-bold tracking-wider font-spartan"
          >
           NILESH KAUTE
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-16 h-[1px] bg-gold mx-auto mt-4 origin-center"
          />
        </div>

        {/* Loading text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 text-gold text-xs tracking-[0.3em] uppercase font-light"
        >
          Initializing
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✦
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Subtle scan line effect */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gold/20 z-[120]"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}