import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function About() {
  // Container animation - controls when child elements start animating
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2  // Delay between each child animation
      }
    }
  };

  // Individual item animation - for paragraphs
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Badge animation - for skill badges
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title animates in when scrolled into view */}
        <motion.h2
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}  // Triggers when scrolled into view
          viewport={{ once: true }}  // Animation happens only once
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <br></br>

        {/* Container for paragraphs with stagger effect */}
        <motion.div
          className="text-gray-300 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Each paragraph animates in sequence */}
          <motion.p className="text-lg" variants={itemVariants}>
            I'm a software engineer currently working as an AI Expert at Amazon AGI in Cambridge.
          </motion.p>
          <br></br>

          <motion.p className="text-lg" variants={itemVariants}>
            I graduated with a First-Class Honours in Computer Science from the University of Kent.
          </motion.p>
          <br></br>

          <motion.p className="text-lg" variants={itemVariants}>
            My experience spans backend development, cloud infrastructure, and AI/ML systems.
          </motion.p>
          <br></br>

          {/* Skills section */}
          <div className="mt-8">
            <motion.h3
              className="text-2xl font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Skills & Technologies
            </motion.h3>
            <br></br>

            {/* Skills badges container with stagger animation */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Each badge animates in with scale effect */}
              {['Python', 'SQL', 'Java', 'AWS', 'Azure', 'Linux', 'Docker', 'Git'].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
                  variants={badgeVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator - bouncing arrow at bottom of section */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [0, 10, 0] }}
        viewport={{ once: false }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <a href="#projects" className="text-gray-500 hover:text-gray-300 transition-colors">
          <FaChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

export default About;
