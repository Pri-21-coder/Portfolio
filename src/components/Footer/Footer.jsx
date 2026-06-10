import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#03020c] pt-12 pb-6 border-t border-white/10 overflow-hidden z-10">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#8245ec] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col items-center relative z-10"
      >
        {/* Brand / Logo (Matches Navbar) */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-extrabold cursor-pointer group flex items-center tracking-wider mb-6"
        >
          <span className="text-[#8245ec] transition-transform duration-300 group-hover:-translate-x-1 mr-1">&lt;</span>
          <span className="text-white drop-shadow-md">Pritha</span>
          <span className="text-[#8245ec] animate-pulse mx-1">/</span>
          <span className="text-white drop-shadow-md">Pal</span>
          <span className="text-[#8245ec] transition-transform duration-300 group-hover:translate-x-1 ml-1">&gt;</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-white text-sm md:text-base font-semibold tracking-wide transition-colors duration-300 relative group"
            >
              {item.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#8245ec] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#8245ec]"></span>
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Pri-21-coder" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pritha-pal21" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/moye_ong?igsh=bHQ5cnA5a202Z2hl" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-[#8245ec] transition-colors duration-300 drop-shadow-lg hover:drop-shadow-[0_0_15px_rgba(130,69,236,0.6)]"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Separator Line */}
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6"></div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Pritha Pal. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;