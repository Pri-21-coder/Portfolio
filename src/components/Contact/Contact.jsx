import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-[#050714] relative z-10 overflow-hidden min-h-screen flex flex-col justify-center items-center"
    >
      {/* Background ambient glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8245ec] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <ToastContainer />

      {/* Section Title - Matched perfectly to your global layout */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          CONTACT
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full shadow-[0_0_10px_#8245ec]"
        ></motion.div>

        {/* The Typing Effect Subtitle */}
        <div className="mt-6 max-w-2xl mx-auto h-16 md:h-auto flex justify-center text-center">
          <ReactTypingEffect
            text={['I’d love to hear from you—reach out for any opportunities or questions!']}
            speed={40}
            eraseSpeed={30}
            typingDelay={500}
            eraseDelay={8000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec] font-bold text-xl ml-1 animate-pulse">{cursor}</span>
            )}
            displayTextRenderer={(text) => {
              return (
                <span className="text-gray-400 text-sm md:text-base font-semibold tracking-wide">
                  {text}
                </span>
              );
            }}
          />
        </div>
      </div>

      {/* Floating Glassmorphic Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }} // Physical pop effect
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full max-w-lg bg-[#0a0c1a]/95 backdrop-blur-2xl border border-gray-800/60 hover:border-[#8245ec]/60 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_rgba(130,69,236,0.25)] transition-all duration-500 relative overflow-hidden group"
      >
        {/* Inner Glowing Aura on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(130, 69, 236, 0.15) 0%, transparent 70%)' }}></div>

        {/* Subtle top indicator bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#8245ec]/80 to-transparent absolute top-0 left-0 z-10"></div>

        {/* Form Content - Wrapped in z-10 to stay above the glow */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white text-center tracking-wide mb-6">
            Connect With Me <span className="inline-block animate-bounce ml-1">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            {/* Email Input */}
            <div className="relative group/input">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#121026]/40 text-white text-sm md:text-base border border-gray-800/80 transition-all duration-300 focus:outline-none focus:border-[#8245ec]/80 focus:bg-[#121026]/80 focus:shadow-[0_0_15px_rgba(130,69,236,0.25)] placeholder-gray-500 font-medium"
              />
            </div>

            {/* Name Input */}
            <div className="relative group/input">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#121026]/40 text-white text-sm md:text-base border border-gray-800/80 transition-all duration-300 focus:outline-none focus:border-[#8245ec]/80 focus:bg-[#121026]/80 focus:shadow-[0_0_15px_rgba(130,69,236,0.25)] placeholder-gray-500 font-medium"
              />
            </div>

            {/* Subject Input */}
            <div className="relative group/input">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-[#121026]/40 text-white text-sm md:text-base border border-gray-800/80 transition-all duration-300 focus:outline-none focus:border-[#8245ec]/80 focus:bg-[#121026]/80 focus:shadow-[0_0_15px_rgba(130,69,236,0.25)] placeholder-gray-500 font-medium"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative group/input">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full p-4 rounded-xl bg-[#121026]/40 text-white text-sm md:text-base border border-gray-800/80 transition-all duration-300 focus:outline-none focus:border-[#8245ec]/80 focus:bg-[#121026]/80 focus:shadow-[0_0_15px_rgba(130,69,236,0.25)] placeholder-gray-500 font-medium resize-none leading-relaxed"
              />
            </div>
            
            {/* Premium Submit Button */}
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#8245ec] to-fuchsia-600 hover:from-fuchsia-600 hover:to-[#8245ec] py-4 text-white text-base font-bold rounded-xl shadow-[0_5px_20px_rgba(130,69,236,0.3)] hover:shadow-[0_8px_25px_rgba(217,70,239,0.5)] transition-all duration-500 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;