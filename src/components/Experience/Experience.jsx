import React, { useRef } from "react";
import { experiences } from "../../constants";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

// --- Magnetic 3D Card Component ---
const MagneticCard = ({ children, isLeft }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 70, damping: 15, duration: 0.8 }}
      className={`w-full sm:w-[45%] ${isLeft ? "sm:pr-12" : "sm:pl-12"} z-10 perspective-1000`}
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="p-6 md:p-8 rounded-2xl bg-[#11152c]/80 backdrop-blur-lg border border-gray-700/50 hover:border-[#8245ec] transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(130,69,236,0.3)] group"
      >
        {children}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  // --- Scroll Tracking Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-[#050714] relative z-10 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8245ec] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          EXPERIENCE
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full shadow-[0_0_10px_#8245ec]"
        ></motion.div>

       {/* The Typing Effect Subtitle */}
        <div className="mt-6 max-w-2xl mx-auto h-16 md:h-auto flex justify-center">
          <ReactTypingEffect
            text={['A collection of my work experience and the roles I have taken in various organizations']}
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

      {/* Experience Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* The Base Dim Line */}
        <div className="absolute sm:left-1/2 left-6 transform sm:-translate-x-1/2 w-1 h-full bg-gray-800 rounded-full z-0"></div>

        {/* The Scroll-Linked Neon Tracer Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute sm:left-1/2 left-6 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-[#8245ec] to-fuchsia-500 rounded-full z-0 shadow-[0_0_15px_#8245ec]"
        ></motion.div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row items-center mb-24 ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              } pl-16 sm:pl-0`}
            >
              {/* Timeline Node / Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 bg-[#050714] border-[3px] border-[#8245ec] w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-20 shadow-[0_0_20px_rgba(130,69,236,0.8)]"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              {/* Advanced Magnetic Card */}
              <MagneticCard isLeft={isLeft}>
                {/* Header Row: Logo & Titles */}
                <div className="flex items-center space-x-5 mb-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-xl overflow-hidden flex-shrink-0 border border-gray-600 group-hover:border-[#8245ec] transition-colors p-2 shadow-inner">
                    {experience.img ? (
                      <img src={experience.img} alt={experience.company} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 font-black text-2xl">
                        {experience.company.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-md">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm md:text-md font-bold text-[#b48ff0] mt-1 tracking-widest uppercase">
                      {experience.company}
                    </h4>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="inline-block px-3 py-1 mb-4 rounded-md bg-[#8245ec]/10 border border-[#8245ec]/30 text-gray-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  {experience.date}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {experience.desc}
                </p>

                {/* Skills Pills */}
                <div>
                  <ul className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-gray-900/80 border border-gray-700 text-gray-300 px-3 py-1.5 text-xs md:text-sm rounded-lg font-bold transition-all duration-300 group-hover:bg-[#8245ec] group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_0_10px_rgba(130,69,236,0.5)] cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </MagneticCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;