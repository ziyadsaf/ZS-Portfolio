import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center px-6">
        {/* Name with gradient effect - teal gradient */}
        {/* bg-clip-text makes the gradient apply only to the text */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] bg-clip-text text-transparent inline-block leading-relaxed"
          initial={{ opacity: 0, y: 20 }}  // Start invisible and 20px down
          animate={{ opacity: 1, y: 0 }}   // Animate to visible and original position
          transition={{ duration: 0.8 }}    // Animation takes 0.8 seconds
        >
          Ziyad Safouane
        </motion.h1>

        {/* Title with fade-in animation, delayed by 0.2s for stagger effect */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer
        </motion.p>

        {/* Tagline with fade-in animation, delayed by 0.4s for stagger effect */}
        <motion.p
          className="text-lg text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building applications with clean code and user-focused design
        </motion.p>
      </div>

      {/* Scroll indicator - bouncing arrow at bottom of section */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <a href="#about" className="text-gray-500 hover:text-gray-300 transition-colors">
          <FaChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
