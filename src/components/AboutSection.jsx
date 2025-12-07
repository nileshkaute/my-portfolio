import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/profile.png"; // replace with your actual image path

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center py-16 px-8  sm:px-10 md:px-12 h-auto min-h-[300px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[450px]"
      style={{ margin: "15px" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left gap-12">
        {/* Left Side - Image */}
        <motion.div
          className="hidden md:flex justify-center items-center w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={myImage}
            alt="Profile"
            className="rounded-2xl shadow-lg border border-gray-700 w-64 h-64 object-cover mx-auto"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-2/3">
          {/* Title */}
          <motion.div
            className="mb-6 sm:mb-8 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-200 md:text-5xl font-bold inline-block border-b-4 hover:border-purple-500 pb-2">
              About <span className="text-purple-700">Me</span>
            </h2>
          </motion.div>

          {/* About Text */}
          <motion.div
            className=" md:text-left space-y-5 text-justify  "
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
              I'm a passionate{" "}
              <span className="text-yellow-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              from
              <span className="text-yellow-400 font-semibold">
                {" "}
                Pune, Maharashtra
              </span>
              . I enjoy building modern, user-friendly websites and web
              applications that solve real-world problems.
            </p>
            <br />

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
              My journey started with{" "}
              <span className="text-purple-400 font-semibold">HTML</span>,
              <span className="text-purple-400 font-semibold"> CSS</span>, and
              <span className="text-purple-400 font-semibold"> JavaScript</span>
              . Over time, I expanded into{" "}
              <span className="text-purple-400 font-semibold">React</span> for
              frontend development and explored backend technologies such as
              <span className="text-purple-400 font-semibold"> PHP</span>,
              <span className="text-purple-400 font-semibold"> MySQL</span>, and
              <span className="text-purple-400 font-semibold"> Java</span>.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
              I believe in continuous learning — always improving my skills,
              exploring new technologies, and creating meaningful, impactful
              projects. Whether it's frontend design or backend logic, I truly
              enjoy every part of it.
            </p>
            <br />

            {/* Hobbies Section */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl  leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
              <span className="text-cyan-700 font-semibold">Hobbies:</span> When
              I'm not coding, I love exploring tech blogs, designing creative
              UIs, watching sci-fi movies, and Listing to Music.
            </p>
            <br />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-base md:text-lg mt-2 lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
                <span className="text-cyan-700 font-semibold">Contact:</span>{" "}
                +91 7821053353
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
                <span className="text-cyan-700 font-semibold">Email:</span>{" "}
                nileshkaute1@gmail.com
              </p>
              <div className=" flex gap-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
                  <a
                    className="underline text-blue-400"
                    href="https://www.linkedin.com/in/nilesh-kaute/"
                  >
                    Linkdin
                  </a>
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-4xl mx-auto md:mx-0">
                  <a
                    className="underline text-blue-400"
                    href="https://github.com/nileshkaute"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
