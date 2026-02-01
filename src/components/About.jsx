import { motion } from 'framer-motion';
import { FaChevronDown, FaDownload } from 'react-icons/fa';

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
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Profile Photo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile.jpg"
            alt="Ziyad Safouane"
            className="w-40 h-40 rounded-full object-cover border-4 border-[#2193b0] shadow-lg shadow-[#2193b0]/30"
          />
        </motion.div>

        {/* Title animates in when scrolled into view */}
        <motion.h2
          className="text-4xl font-bold text-white text-center"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Container for paragraphs with stagger effect */}
        <motion.div
          className="text-gray-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.p className="text-lg" style={{ marginBottom: '20px' }} variants={itemVariants}>
            I'm a software engineer currently working as an AI Expert at Amazon AGI in Cambridge.
          </motion.p>

          <motion.p className="text-lg" style={{ marginBottom: '20px' }} variants={itemVariants}>
            I graduated with a First-Class Honours in Computer Science from the University of Kent.
          </motion.p>

          <motion.p className="text-lg" style={{ marginBottom: '40px' }} variants={itemVariants}>
            My experience spans backend development, cloud infrastructure, and AI/ML systems.
          </motion.p>

          {/* Skills section */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-white"
              style={{ marginBottom: '20px' }}
              variants={itemVariants}
            >
              Skills & Technologies
            </motion.h3>

            {/* Skills badges container with stagger animation */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
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

        {/* CV Download Button - centered at bottom */}
        <motion.div
          className="flex justify-center"
          style={{ marginTop: '40px', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/Ziyad Safouane CV.pdf"
            download
            className="flex flex-col items-center justify-center w-28 h-28 bg-gradient-to-br from-[#2193b0] to-[#6dd5ed] text-white rounded-xl hover:shadow-lg hover:shadow-[#6dd5ed]/30 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={32} />
            <span className="mt-2 text-sm font-medium">Download CV</span>
          </motion.a>
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
