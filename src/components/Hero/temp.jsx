import React, { useRef, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import videoSrc from '../../assets/intro.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    // Changed id to "home" to resolve underline tracing conflicts
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050414]">
      
      {/* Background Video Layer */}
      <div 
        className="absolute inset-0 w-full h-full z-0 cursor-pointer"
        onClick={handleVideoToggle}
        title={isPlaying ? "Click anywhere to pause audio" : "Click anywhere to play audio"}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-transparent md:bg-black/20"></div>
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex justify-start md:justify-end pointer-events-none">
        <div 
          className="w-full md:w-[40%] lg:w-[28%] text-left pointer-events-auto mt-64 md:mt-0"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] text-[#90EE90] uppercase mb-3 drop-shadow-md">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4 tracking-tight drop-shadow-[0_0_30px_rgba(130,69,236,0.2)]">
            Pritha Pal
          </h2>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#90EE90] leading-relaxed drop-shadow-lg">
            <span className="text-white font-medium">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'ML Engineer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#90EE90] font-bold ml-0.5">{cursor}</span>
              )}
            />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;