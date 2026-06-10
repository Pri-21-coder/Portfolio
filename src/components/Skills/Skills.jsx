import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

// --- Animation Variants ---
// Controls the container to stagger the loading of each card
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card appearing
    },
  },
};

// Controls the individual cards fading and sliding up
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// Controls the springy hover effect on the skill badges
const badgeVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.1,
    y: -5,
    boxShadow: "0px 10px 20px rgba(130, 69, 236, 0.4)",
    borderColor: "#8245ec",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient clip-path-custom relative z-10 overflow-hidden"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        SKILLS
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full"
      ></motion.div>
      {/* The Typing Effect Subtitle */}
      <div className="mt-6 max-w-2xl mx-auto h-16 md:h-auto flex justify-center text-center">
        <ReactTypingEffect
          text={['A collection of my technical skills and expertise honed through various projects and experiences.']}
          speed={40}
          eraseSpeed={30}
          typingDelay={500}
          eraseDelay={8000}
          cursorRenderer={(cursor) => (
            <span className="text-[#8245ec] font-bold text-xl ml-1 animate-pulse">{cursor}</span>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <span className="text-gray-400 text-lg md:text-xl font-semibold tracking-wide">
                {text}
              </span>
            );
          }}
        />
      </div>
    </div>

    {/* Skill Categories Container */}
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto"
    >
      {SkillsInfo.map((category) => (
        <motion.div key={category.title} variants={cardVariants} className="h-full">
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="h-full"
          >
            {/* Card Body */}
            <div
              className="flex flex-col h-full bg-[#11152c] bg-opacity-80 backdrop-blur-xl px-6 py-8 md:p-10 rounded-3xl border border-gray-700 
              shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-colors duration-500 hover:border-gray-500"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-8 text-center tracking-wide">
                {category.title}
              </h3>

              {/* Skill Items - Animated with Framer Motion */}
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={badgeVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center space-x-2 bg-gray-800 bg-opacity-60 border border-gray-600 rounded-xl py-2 px-4 cursor-pointer"
                  >
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none"
                      />
                    )}
                    <span className="text-sm md:text-base font-medium text-gray-300 pointer-events-none">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;