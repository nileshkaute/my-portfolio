import React from "react";
import { motion } from "framer-motion";

const ScrollingBanner = () => {
  // A long, high-impact creative sentence
  const bannerText = "DESIGNING THE FUTURE • CRAFTING DIGITAL EXPERIENCES • ";

  return (
    /* h-screen: This div now occupies the full height of the viewport */
    <div className="relative w-full h-screen overflow-hidden bg-[#1c120f] flex items-center justify-center">
      
      {/* -rotate-12: An aggressive tilt to match the brewery style 
          scale-150: Ensures the edges of the tilted container stay off-screen 
      */}
      <div className="-rotate-12 flex flex-col scale-150 w-full">
        
        {/* The Track: Adding a subtle border-y gives it that "strip" look */}
        <div className="flex whitespace-nowrap border-y border-white/10 py-10 bg-white/[0.02]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            /* DURATION: 120 - This is the key. 
               The higher the number, the slower and more premium the movement.
            */
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 pr-20"
          >
            {/* text-[20vw]: Font size is tied to screen width. 
                This makes it massive enough to fill the screen height.
            */}
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[16vw] font-anton uppercase tracking-tighter text-white leading-none opacity-90">
                {bannerText}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ScrollingBanner;