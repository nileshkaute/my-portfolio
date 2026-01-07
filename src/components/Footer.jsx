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
        <footer 
       
            className="bg-black py-16 md:py-24 px-6 border-t border-zinc-900 relative overflow-hidden flex flex-col items-center justify-center text-center "
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-orange-900/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

            {/* Content Wrapper */}
            <div className="max-w-7xl w-full flex flex-col items-center">
                
                {/* --- TOP SECTION --- */}
                <div className="mb-16 md:mb-20">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-zinc-600 font-mono text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.8em] mb-6 md:mb-8"
                    >
                        End of Line // Project Transmission
                    </motion.p>
                    
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        // Responsive text sizes: 4xl on mobile, 8xl on medium, 10rem on large
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase italic tracking-tighter leading-[0.9] md:leading-[0.85]"
                    >
                        Let's forge <br /> 
                        <span className="text-orange-800 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">The Future.</span>
                    </motion.h2>
                </div>

                {/* --- BOTTOM SECTION --- */}
                <div className="w-full flex flex-col items-center pt-12 md:pt-20 border-t border-zinc-900 gap-12 md:gap-16">
                    
                    {/* Brand Name */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-white font-black uppercase italic tracking-[0.2em] md:tracking-[0.3em] text-2xl md:text-4xl">
                            NILESH KAUTE
                        </h4>
                        <div className="h-1 w-8 md:w-12 bg-orange-700 mt-3 md:mt-4 shadow-[0_0_15px_rgba(194,65,12,0.8)]"></div>
                    </div>

                    {/* Socials - Clean List */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="text-zinc-600 hover:text-white font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all hover:-translate-y-1"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col items-center gap-6 md:gap-8">
                        <div className="flex items-center gap-3 md:gap-4 bg-zinc-950 px-6 md:px-8 py-2 md:py-3 rounded-full border border-zinc-900">
                            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse shadow-[0_0_10px_#ff4500]"></span>
                            <span className="text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
                                Status: Available for Hire
                            </span>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <p className="text-zinc-800 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                                © 2025 / 19.1086° N, 73.0084° E
                            </p>
                        </div>

                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-zinc-700 hover:text-orange-700 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] md:tracking-[1em] transition-colors mt-2"
                        >
                            [ Back To Top ]
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;