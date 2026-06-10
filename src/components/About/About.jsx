import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png';
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Section Title */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          > 
            About Me
          </motion.h2>

          {/* Purple Line - Added mx-auto md:mx-0 here */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-[#8245ec] mt-4 rounded-full mx-auto md:mx-0" 
          />
          
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I am a Full Stack Developer specializing in the MERN Stack, 
            passionate about building scalable web applications 
            and delivering seamless user experiences. 
            Currently pursuing a B.Tech in Computer Science Engineering (Data Science), 
            I am also exploring Machine Learning and AI. I enjoy solving 
            complex problems, learning new technologies, and creating impactful digital solutions.
          </p>
          
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/17mv9SarAz81qc0L4jKiaHvfvMckaXSd_/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Pritha Pal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;