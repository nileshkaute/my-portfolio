import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImage from "/images/profile.png"; 

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const pinTriggerRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // DESKTOP: Pinning and Row-by-Row Reveal
        "(min-width: 768px)": function () {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: pinTriggerRef.current,
              start: "top top",      
              end: "+=200%",         // Controls how long the section stays pinned
              pin: true,             
              scrub: 1,              
              anticipatePin: 1,
            },
          });

          // Text starts hidden and reveals one by one as you scroll
          textRefs.current.forEach((el, index) => {
            tl.fromTo(
              el,
              { opacity: 0, y: 40 }, 
              { opacity: 1, y: 0, duration: 1 },
              index * 0.7 
            );
          });
          
          tl.to({}, { duration: 1 }); // Buffer at the end
        },
      });
    }, pinTriggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinTriggerRef} className="bg-black mb-20">
      <motion.section
        ref={sectionRef}
        id="about"
        className="flex flex-col md:flex-row items-center justify-center px-8 sm:px-10 md:px-12 min-h-screen relative overflow-hidden"
        style={{ margin: "15px", paddingTop: "80px", paddingBottom: "80px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        {/* Background Cinematic Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,69,0,0.03)_0%,transparent_50%)] pointer-events-none" />

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left gap-12 relative z-10">
          
          {/* Left Side - Image (Pinned on Scroll) */}
          <div className="hidden md:flex justify-center items-center w-full md:w-1/3">
            <div className="relative group">
               {/* Amber Glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-mocha-900 to-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={myImage}
                alt="Profile"
                className="relative rounded-2xl shadow-2xl border border-gold/50 w-64 h-64 md:w-80 md:h-80 object-cover mx-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Side - Full Text Content */}
          <div className="w-full md:w-2/3">
            {/* Title */}
            <div className="mb-6 sm:mb-8 text-center md:text-left" ref={addToRefs}>
           <h2 className="text-5xl  font-anton uppercase tracking-tight outline-text">
  About Me
</h2>


            </div>

            {/* About Text - Sequential Reveal */}
            <div className="md:text-left space-y-5 text-justify" style={{ padding: "10px" }}>
              <p ref={addToRefs} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-warmGray max-w-4xl mx-auto md:mx-0">
                I'm a passionate{" "}
                <span className="text-gold font-semibold drop-shadow-sm">
                  Full Stack Developer
                </span>{" "}
                from
                <span className="text-gold font-semibold">
                  {" "}
                  Pune, Maharashtra
                </span>
                . I enjoy building modern, user-friendly websites and web
                applications that solve real-world problems.
              </p>

              <p ref={addToRefs} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-warmGray max-w-4xl mx-auto md:mx-0">
                My journey started with{" "}
                <span className="text-gold font-semibold">HTML</span>,
                <span className="text-gold font-semibold"> CSS</span>, and
                <span className="text-gold font-semibold"> JavaScript</span>
                . Over time, I expanded into{" "}
                <span className="text-gold font-semibold">React</span> for
                frontend development and explored backend technologies such as
                <span className="text-gold font-semibold"> PHP</span>,
                <span className="text-gold font-semibold"> MySQL</span>, and
                <span className="text-gold font-semibold"> Java</span>.
              </p>

              <p ref={addToRefs} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-softGray max-w-4xl mx-auto md:mx-0 italic font-serif opacity-80">
                I believe in continuous learning — always improving my skills,
                exploring new technologies, and creating meaningful, impactful
                projects.
              </p>

              {/* Hobbies Section */}
              <p ref={addToRefs} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-warmGray max-w-4xl mx-auto md:mx-0">
                <span className="text-mutedGold font-bold uppercase tracking-widest text-xs">The Arsenal:</span> When
                I'm not coding, I love exploring tech blogs, designing creative
                UIs, watching sci-fi movies, and Listening to Music.
              </p>

              <div ref={addToRefs} className="flex flex-col gap-2 pt-4 border-t border-gold/10">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-warmGray max-w-4xl mx-auto md:mx-0">
                  <span className="text-mutedGold font-semibold uppercase text-xs">Reach Out:</span>{" "}
                  +91 7821053353
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-warmGray max-w-4xl mx-auto md:mx-0">
                  <span className="text-mutedGold font-semibold uppercase text-xs">Mail:</span>{" "}
                  nileshkaute1@gmail.com
                </p>
                <div className="flex gap-6 mt-2">
                  <a
                    className="text-sm font-bold uppercase tracking-tighter text-gold hover:text-ivory transition-colors duration-500 underline decoration-gold/50 underline-offset-8"
                    href="https://www.linkedin.com/in/nilesh-kaute/"
                  >
                    Linkedin
                  </a>
                  <a
                    className="text-sm font-bold uppercase tracking-tighter text-gold hover:text-ivory transition-colors duration-500 underline decoration-gold/50 underline-offset-8"
                    href="https://github.com/nileshkaute"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSection;