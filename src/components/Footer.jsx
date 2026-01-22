import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const socialLinks = [
        { name: "LinkedIn", url: "#" },
        { name: "GitHub", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: "#" },
    ];

    return (
        <footer className=" py-20 px-6 border-t border-zinc-900 relative overflow-hidden flex flex-col items-center justify-center text-center">
            
            {/* Background Cinematic Glow - Centered behind the name */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[300px] bg-gold/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl w-full flex flex-col items-center z-10">
                
                {/* --- HUGE BRAND NAME SECTION --- */}
                <div className="mb-20 md:mb-32">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-zinc-500 font-mono text-[9px] md:text-xs uppercase tracking-[0.6em] md:tracking-[1em] mb-4"
                    >
                        Portfolio Transmission // 2025
                    </motion.p>
                    
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] text-nowrap font-black text-white uppercase italic tracking-tighter leading-none"
                    >
                        NILESH <br className="md:hidden" /> 
                        <span className="text-gold drop-shadow-[0_0_20px_rgba(201,162,77,0.3)]">KAUTE</span>
                    </motion.h2>
                    
                    {/* Minimalist Underline */}
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        className="h-[2px] bg-gold mx-auto mt-8 mb-5 shadow-[0_0_15px_#C9A24D]"
                    ></motion.div>
                </div>

                {/* --- LINKS & META --- */}
                <div className="w-full flex flex-col items-center pt-16 border-t border-zinc-900 gap-10">
                    
                    {/* Socials */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="text-zinc-500 hover:text-gold font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] transition-all hover:-translate-y-1"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-3 bg-zinc-900/50 px-8 py-5 rounded-full border border-zinc-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#C9A24D]"></span>
                        <span className="text-zinc-400 font-mono text-[9px] uppercase tracking-widest">
                            Available for work
                        </span>
                    </div>
                    
                    {/* Copyright & Coordinates */}
                    <div className="flex flex-col gap-4 mt-4">
                        <p className="text-zinc-600 font-mono text-[8px] uppercase tracking-[0.4em]">
                            © 2025 NILESH KAUTE / 19.1086° N, 73.0084° E
                        </p>
                        
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-zinc-700 hover:text-gold text-[9px] font-bold uppercase tracking-[1em] transition-colors"
                        >
                            [ Top ]
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;