import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- Advanced 3D Hover Card Component ---
const ProjectCard = ({ project, onClick }) => {
  const ref = useRef(null);
  
  // Mouse position trackers
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse movement to 3D rotation (-10deg to 10deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="perspective-1000 w-full"
    >
      <div 
        className="group relative border border-gray-800 bg-[#0d1126]/90 backdrop-blur-2xl rounded-3xl overflow-hidden cursor-pointer hover:border-[#8245ec] transition-colors duration-500 shadow-2xl h-full flex flex-col"
      >
        {/* Glowing aura that follows mouse (Optional but premium) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(130, 69, 236, 0.15) 0%, transparent 70%)' }}></div>

        {/* 3D Popped Image */}
        <div style={{ transform: "translateZ(40px)" }} className="relative h-56 sm:h-64 overflow-hidden bg-[#050714] p-4 m-4 rounded-2xl border border-gray-800/50">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#8245ec] font-black text-6xl bg-[#0a0c1a] rounded-xl shadow-inner">
              {project.title.charAt(0)}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div style={{ transform: "translateZ(20px)" }} className="px-8 pb-8 flex-grow flex flex-col justify-between z-10">
          <div>
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 group-hover:from-white group-hover:to-[#b48ff0] transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 line-clamp-3 text-sm md:text-base leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-[#8245ec]/10 border border-[#8245ec]/30 text-xs font-bold text-[#b48ff0] rounded-lg px-3 py-1.5 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-gray-500 text-xs font-bold px-1 py-1.5 flex items-center">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-[#050414] relative z-10 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#8245ec] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600 opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          PROJECTS
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
            text={['Showcasing complex problem-solving through clean, scalable web architecture.']}
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
      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto relative z-10 perspective-1000">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>
        {/* Advanced Animated Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3, delay: 0.1 } }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#03020c]/70 p-4 sm:p-6"
          >
            {/* Premium Fluid Reveal Content Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0c1e]/95 backdrop-blur-3xl border border-[#8245ec]/40 rounded-3xl shadow-[0_0_80px_rgba(130,69,236,0.25)] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative"
            >
              {/* Top Gradient Glowing Edge */}
              <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#8245ec] to-fuchsia-500 absolute top-0 left-0 opacity-80"></div>

              {/* Header / Close Button */}
              <div className="flex justify-end p-4 z-20 absolute top-2 right-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-black/40 border border-gray-700 text-gray-300 hover:text-white hover:border-[#8245ec] hover:bg-[#8245ec]/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 focus:outline-none"
                >
                  <span className="text-2xl font-bold mb-1">&times;</span>
                </button>
              </div>

              {/* Staggered Scrollable Content */}
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
                className="overflow-y-auto custom-scrollbar p-6 pt-12 md:p-10 md:pt-12 flex flex-col h-full"
              >
                
                {/* 1. Image Showcase */}
                {selectedProject.image && (
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="w-full flex justify-center mb-8 rounded-2xl overflow-hidden bg-[#050414] border border-[#8245ec]/20 p-2 shadow-inner"
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto max-h-[45vh] object-contain rounded-xl"
                    />
                  </motion.div>
                )}

                {/* 2. Title (REDUCED FONT SIZE) */}
                <motion.h3 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 tracking-tight"
                >
                  {selectedProject.title}
                </motion.h3>
                
                {/* 3. Description Text */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="prose prose-invert max-w-none mb-10"
                >
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line">
                    {selectedProject.fullDescription}
                  </p>
                </motion.div>

                {/* 4. Tags (ADDED HOVER/TAP ANIMATIONS) */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex flex-wrap gap-3 mb-12"
                >
                  {selectedProject.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1, y: -3, backgroundColor: "rgba(130, 69, 236, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-default bg-[#8245ec]/10 border border-[#8245ec]/30 text-white text-sm font-bold rounded-xl px-4 py-2 shadow-[0_0_15px_rgba(130,69,236,0.15)] transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* 5. Action Buttons (ADDED HOVER/TAP ANIMATIONS & ENHANCED GLOW) */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex flex-col sm:flex-row gap-5 mt-auto"
                >
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-3 bg-[#11152c] border border-gray-600 hover:border-[#8245ec] hover:bg-[#8245ec]/10 text-white px-6 py-4 rounded-2xl text-lg font-bold transition-colors duration-300 group shadow-lg hover:shadow-[0_0_25px_rgba(130,69,236,0.3)]"
                  >
                    <FaGithub className="text-2xl group-hover:text-[#8245ec] transition-colors" />
                    Source Code
                  </motion.a>
                  
                  <motion.a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#8245ec] to-fuchsia-600 hover:from-fuchsia-500 hover:to-[#a855f7] text-white px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(130,69,236,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] group"
                  >
                    <FaExternalLinkAlt className="text-xl group-hover:scale-110 transition-transform" />
                    Live Preview
                  </motion.a>
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
    </section>
  );
};

export default Work;