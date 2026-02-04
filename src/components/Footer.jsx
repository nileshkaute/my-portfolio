import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="h-screen w-full relative overflow-hidden bg-[#1a100a] flex items-center justify-center footer-section">
            
            {/* --- Background Video --- */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-120 grayscale hover:grayscale-0 transition-all duration-1000"
                >
                    <source src="/videos/media.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a100a] via-transparent to-[#1a100a]"></div>
            </div>

            {/* --- Watermark Wrapper (The Fix) --- */}
            <div className="relative z-10 w-[150%] md:w-[120%] flex items-center justify-center select-none pointer-events-none">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-black text-white/10 uppercase italic leading-none tracking-tighter text-center whitespace-nowrap"
                    style={{ 
                        WebkitTextStroke: "1.5px rgba(255,255,255,0.08)",
                        textShadow: "0 0 60px rgba(0,0,0,0.8)",
                    }}
                >
                    NILESH KAUTE
                </motion.h2>
            </div>

            {/* Subtle Bottom Credit */}
           {/* --- Bottom Navigation / Credit --- */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group flex flex-col items-center gap-2"
    >
        {/* Animated Arrow Icon */}
        <motion.span 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold/50 group-hover:text-gold transition-colors duration-300"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </motion.span>

        {/* Text Button */}
        <p className="text-white/20 group-hover:text-gold font-mono text-[9px] uppercase tracking-[0.8em] transition-all duration-300 cursor-pointer">
            Back to Top
        </p>
    </button>
    
    <p className="text-white/10 font-mono text-[8px] uppercase tracking-[0.4em] mt-2">
        Creative Developer // 2026
    </p>
</div>

        </footer>
    );
};

export default Footer;