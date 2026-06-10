import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { projects } from "../../constants";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      onClick={onClick}
      className="cursor-pointer group h-full"
    >
      <div className="bg-[#0d1126] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#8245ec]/60 hover:shadow-[0_0_30px_rgba(130,69,236,0.2)] transition-all duration-300 h-full flex flex-col">
        <div className="h-56 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-[#b48ff0] transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg bg-[#8245ec]/10 border border-[#8245ec]/20 text-[#b48ff0] text-xs transition-all duration-300 group-hover:bg-[#8245ec]/20 group-hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="bg-[#050414] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8245ec]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b48ff0]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white tracking-wider"
        >
          PROJECTS
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"
        />

        <div className="mt-8 min-h-[28px]">
          <ReactTypingEffect
            text={[
              "Showcasing complex problem-solving through clean, scalable web architecture.",
            ]}
            speed={50}
            eraseDelay={5000}
            className="text-gray-400 text-lg"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#0b0c1e] border border-[#8245ec]/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="sticky top-0 flex justify-end p-4 bg-[#0b0c1e]/80 backdrop-blur-md z-20">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#8245ec] hover:border-transparent transition-colors duration-200"
                >
                  <FaTimes />
                </motion.button>
              </div>

              <div className="p-6 md:p-10 pt-2">
                {selectedProject.image && (
                  <div className="w-full rounded-2xl mb-8 overflow-hidden border border-white/5">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                <h3 className="text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                {/* Tags Section with New Hover Effects */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#8245ec]/10 border border-[#8245ec]/20 px-3 py-2 rounded-xl text-sm text-[#b48ff0] hover:bg-[#8245ec]/30 hover:border-[#8245ec]/60 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -4, 
                      backgroundColor: "#1e2547",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-3 bg-[#161b33] border border-white/5 text-white py-3.5 rounded-xl font-medium transition-all duration-200"
                  >
                    <FaGithub className="text-lg" />
                    Source Code
                  </motion.a>

                  <motion.a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -4, 
                      backgroundColor: "#935bf2",
                      boxShadow: "0 10px 25px rgba(130, 69, 236, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-3 bg-[#8245ec] text-white py-3.5 rounded-xl font-medium transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;