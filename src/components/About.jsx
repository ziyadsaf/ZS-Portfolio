import { motion } from 'framer-motion';
import { FaChevronDown, FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

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

          {/* Experience section */}
          <div style={{ marginTop: '40px' }}>
            <motion.h3
              className="text-2xl font-semibold text-white flex items-center gap-3"
              style={{ marginBottom: '24px' }}
              variants={itemVariants}
            >
              <FaBriefcase className="text-[#2193b0]" />
              Experience
            </motion.h3>

            <div style={{ display: 'flex', fexDirection: 'column', gap: '32px' }}>
              {/* Amazon */}
              <motion.div
                className="border-l-2 border-[#2193b0]" style={{ paddingLeft: '20px' }}
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">AI Expert – ML Data Services</h4>
                <p className="text-[#6dd5ed] text-sm">Amazon AGI | Cambridge</p>
                <p className="text-gray-400 text-sm" style={{ marginBottom: '8px' }}>Sep 2025 - Present</p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                  <li>Built Python tooling for automated data processing and LLM evaluation workflows, increasing team throughput by 3x</li>
                  <li>Developed prompt engineering frameworks and conducted A/B testing to optimise model behaviour</li>
                  <li>Designed data pipelines handling JSON, JSONL, CSV for large-scale model evaluation</li>
                  <li>Collaborated with ML researchers and engineers to improve dataset quality</li>
                </ul>
              </motion.div>

              {/* Teacher */}
              <motion.div
                className="border-l-2 border-[#2193b0]" style={{ paddingLeft: '20px' }}
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">Computer Science Teacher</h4>
                <p className="text-[#6dd5ed] text-sm">Whitgift School, Grey Court School | London</p>
                <p className="text-gray-400 text-sm" style={{ marginBottom: '8px' }}>Sep 2021 - Sep 2024</p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                  <li>Taught OOP in Python, algorithms, and data structures to 100+ students</li>
                  <li>Integrated LLM-powered educational tools into curriculum</li>
                  <li>Performed data analysis using Python and Power BI to improve learning outcomes</li>
                </ul>
              </motion.div>

              {/* Egress */}
              <motion.div
                className="border-l-2 border-[#2193b0]" style={{ paddingLeft: '20px' }}
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">IT Operations Engineer</h4>
                <p className="text-[#6dd5ed] text-sm">Egress Software Technologies | London</p>
                <p className="text-gray-400 text-sm" style={{ marginBottom: '8px' }}>Jun 2019 - Sep 2020</p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                  <li>Wrote Python and Bash automation scripts, reducing manual tasks by 40%</li>
                  <li>Built SQL-based reporting and analytics systems</li>
                  <li>Managed Linux systems and Azure cloud infrastructure</li>
                  <li>Led enterprise network security redesign, presenting to C-Suite</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education section */}
          <div style={{ marginTop: '40px' }}>
            <motion.h3
              className="text-2xl font-semibold text-white flex items-center gap-3"
              style={{ marginBottom: '24px' }}
              variants={itemVariants}
            >
              <FaGraduationCap className="text-[#2193b0]" />
              Education
            </motion.h3>

            <div style={{ display: 'flex', gap: '32px' }}>
              {/* PGCE */}
              <motion.div
                className="border-l-2 border-[#2193b0]" style={{ paddingLeft: '20px' }}
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">PGCE Computer Science</h4>
                <p className="text-[#6dd5ed] text-sm">King's College London</p>
                <p className="text-gray-400 text-sm" style={{ marginBottom: '8px' }}>2021 - 2022</p>
                <p className="text-gray-300 text-sm">Awarded PGCE with QTS certification • British Computing Society Scholarship</p>
              </motion.div>

              {/* BSc */}
              <motion.div
                className="border-l-2 border-[#2193b0]" style={{ paddingLeft: '20px' }}
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">BSc Computer Science</h4>
                <p className="text-[#6dd5ed] text-sm">University of Kent | Canterbury</p>
                <p className="text-gray-400 text-sm" style={{ marginBottom: '8px' }}>2017 - 2021</p>
                <p className="text-gray-300 text-sm">First-Class Honours</p>
              </motion.div>
            </div>
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
