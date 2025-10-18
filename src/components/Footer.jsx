import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-500 text-gray-800 py-8 lg:h-55 md:h-40 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 mt-8 sm:mt-10 lg:mt-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl w-full">
          {/* About Section */}
          <motion.div
            className="flex flex-col items-center p-3 sm:p-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">About</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
              I am a web developer creating modern and responsive web applications.
            </p>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className="flex flex-col items-center p-3 sm:p-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Projects</h2>
            <ul className="text-xs sm:text-sm lg:text-base text-gray-700 space-y-1 sm:space-y-2">
              {["Portfolio Website", "Movie Ticket App", "Weather App"].map((project, index) => (
                <motion.li 
                  key={project}
                  className="hover:text-gray-900 cursor-pointer py-1"
                  whileHover={{ x: 3, color: "#1f2937" }}
                  transition={{ duration: 0.2 }}
                >
                  {project}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="flex flex-col items-center p-3 sm:p-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Contact</h2>
            <div className="space-y-2 sm:space-y-3">
              <motion.p 
                className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-gray-900 cursor-pointer flex items-center justify-center sm:justify-start space-x-2"
                whileHover={{ x: 3, color: "#1f2937" }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-sm sm:text-base" /> 
                <span className="break-all">example@gmail.com</span>
              </motion.p>
              <motion.p 
                className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-gray-900 cursor-pointer flex items-center justify-center sm:justify-start space-x-2"
                whileHover={{ x: 3, color: "#1f2937" }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="text-sm sm:text-base" /> 
                <span>+91-1234567890</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center p-3 sm:p-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Social</h2>
            <ul className="text-xs sm:text-sm lg:text-base text-gray-700 space-y-2 sm:space-y-3 flex flex-col items-center">
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 flex items-center space-x-2"
                >
                  <FaGithub className="text-sm sm:text-base" /> 
                  <span>GitHub</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 flex items-center space-x-2"
                >
                  <FaLinkedin className="text-sm sm:text-base" /> 
                  <span>LinkedIn</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-gray-700 text-xs sm:h-15 sm:text-sm lg:text-base bg-black mt-4 md:h-7 lg:h-15 sm:mt-6 lg:mt-8 py-2 justify-center flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        &copy; {new Date().getFullYear()} Nilesh Kaute. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;