import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Empty by default at top
  const [isScrolled, setIsScrolled] = useState(false);

  // Added Contact section into the menu mapping
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Detect Scroll for Background & Active Section (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Remove underline if user scrolls back up into the Hero area
      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      const scrollPosition = window.scrollY + 200; // Trigger offset window
      let currentActive = "";

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActive = item.id;
          }
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 lg:px-24 ${
        isScrolled
          ? "bg-[#03020c]/95 backdrop-blur-3xl border-b border-white/10 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#03020c]/90 via-[#03020c]/50 to-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
         
         {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl md:text-3xl font-extrabold cursor-pointer group flex items-center tracking-wider"
        >
          <span className="text-[#8245ec] transition-transform duration-300 group-hover:-translate-x-1 mr-1">&lt;</span>
          <span className="text-white drop-shadow-md">Pritha</span>
          <span className="text-[#8245ec] animate-pulse mx-1">/</span>
          <span className="text-white drop-shadow-md">Pal</span>
          <span className="text-[#8245ec] transition-transform duration-300 group-hover:translate-x-1 ml-1">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-base md:text-lg font-bold tracking-wide transition-colors duration-300 py-2 ${
                    isActive ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>

                {/* Animated Glowing Underline for Active Item */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[4px] bg-[#8245ec] rounded-full shadow-[0_0_12px_#8245ec]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover Underline for Inactive Items */}
                {!isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-40 rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/Pri-21-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white hover:drop-shadow-[0_0_12px_#8245ec] transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/pritha-pal21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-[#0077b5] hover:drop-shadow-[0_0_12px_#0077b5] transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8245ec] hover:text-white transition-colors focus:outline-none p-2 bg-[#8245ec]/10 rounded-lg border border-[#8245ec]/30"
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[110%] left-6 right-6 md:hidden bg-[#050412]/95 backdrop-blur-3xl border border-[#8245ec]/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`w-full text-left px-8 py-5 font-extrabold text-xl tracking-wide transition-colors ${
                        isActive 
                          ? "bg-[#8245ec]/20 text-white border-l-4 border-[#8245ec]" 
                          : "text-gray-300 hover:bg-white/10 hover:text-white border-l-4 border-transparent"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile Social Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-10 py-8 border-t border-white/10 bg-black/40"
            >
              <a
                href="https://github.com/Pri-21-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/pritha-pal21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;