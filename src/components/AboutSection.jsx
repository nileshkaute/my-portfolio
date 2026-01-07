import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/profile.png"; // replace with your actual image path


const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="flex  flex-col md:flex-row items-center justify-center py-16 px-8 sm:px-10 md:px-12 h-auto min-h-[300px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[450px]  relative overflow-hidden"
      style={{ margin: "15px" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background Cinematic Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,69,0,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left gap-12 relative z-10">
        
        {/* Left Side - Image (The Forged Armor Style) */}
        <motion.div
          className="hidden md:flex justify-center items-center w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative group">
             {/* Amber Glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-900 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={myImage}
              alt="Profile"
              className="relative rounded-2xl shadow-2xl border border-orange-900/50 w-64 h-64 object-cover mx-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-2/3">
          {/* Title - The Engraved Style */}
          <motion.div
            className="mb-6 sm:mb-8 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600 tracking-tighter uppercase italic pb-2 w-fit">
              About <span className="text-orange-700 drop-shadow-[0_0_8px_rgba(194,65,12,0.5)]">Me</span>
            </h2>
          </motion.div>

          {/* About Text - Fire & Stone Colors */}
          <motion.div
            className="md:text-left space-y-5 text-justify"
            style={{ padding: "10px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto md:mx-0">
              I'm a passionate{" "}
              <span className="text-orange-500 font-semibold drop-shadow-sm">
                Full Stack Developer
              </span>{" "}
              from
              <span className="text-orange-500 font-semibold">
                {" "}
                Pune, Maharashtra
              </span>
              . I enjoy building modern, user-friendly websites and web
              applications that solve real-world problems.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto md:mx-0">
              My journey started with{" "}
              <span className="text-orange-700 font-semibold">HTML</span>,
              <span className="text-orange-700 font-semibold"> CSS</span>, and
              <span className="text-orange-700 font-semibold"> JavaScript</span>
              . Over time, I expanded into{" "}
              <span className="text-orange-700 font-semibold">React</span> for
              frontend development and explored backend technologies such as
              <span className="text-orange-700 font-semibold"> PHP</span>,
              <span className="text-orange-700 font-semibold"> MySQL</span>, and
              <span className="text-orange-700 font-semibold"> Java</span>.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto md:mx-0 italic font-serif opacity-80">
              I believe in continuous learning — always improving my skills,
              exploring new technologies, and creating meaningful, impactful
              projects.
            </p>

            {/* Hobbies Section */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto md:mx-0">
              <span className="text-orange-900 font-bold uppercase tracking-widest text-xs">The Arsenal:</span> When
              I'm not coding, I love exploring tech blogs, designing creative
              UIs, watching sci-fi movies, and Listening to Music.
            </p>

            <div className="flex flex-col gap-2 pt-4 border-t border-zinc-900">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-500 max-w-4xl mx-auto md:mx-0">
                <span className="text-orange-900 font-semibold uppercase text-xs">Reach Out:</span>{" "}
                +91 7821053353
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-500 max-w-4xl mx-auto md:mx-0">
                <span className="text-orange-900 font-semibold uppercase text-xs">Scroll:</span>{" "}
                nileshkaute1@gmail.com
              </p>
              <div className="flex gap-6 mt-2">
                <a
                  className="text-sm font-bold uppercase tracking-tighter text-orange-700 hover:text-orange-500 transition-colors duration-500 underline decoration-orange-900/50 underline-offset-8"
                  href="https://www.linkedin.com/in/nilesh-kaute/"
                >
                  Linkedin
                </a>
                <a
                  className="text-sm font-bold uppercase tracking-tighter text-orange-700 hover:text-orange-500 transition-colors duration-500 underline decoration-orange-900/50 underline-offset-8"
                  href="https://github.com/nileshkaute"
                >
                  Github
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;