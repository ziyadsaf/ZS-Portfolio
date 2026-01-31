import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        {/* Name with gradient effect - indigo to purple gradient */}
        {/* bg-clip-text makes the gradient apply only to the text */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}  // Start invisible and 20px down
          animate={{ opacity: 1, y: 0 }}   // Animate to visible and original position
          transition={{ duration: 0.8 }}    // Animation takes 0.8 seconds
        >
          Ziyad Safouane
        </motion.h1>

        {/* Title with fade-in animation, delayed by 0.2s for stagger effect */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
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
    </section>
  );
}

export default Hero;
