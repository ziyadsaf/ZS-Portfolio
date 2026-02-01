import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  // Container for staggering icon animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15  // Icons appear 0.15s apart
      }
    }
  };

  // Individual icon animation
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title animates in when scrolled into view */}
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <br></br>

        {/* Description with delayed fade-in */}
        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out to me through any of the platforms below.
        </motion.p>
        <br></br>

        {/* Icons container with stagger animation */}
        <motion.div
          className="flex justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LinkedIn - scales up on hover */}
          <motion.a
            href="https://www.linkedin.com/in/ziyad-safouane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={50} />
          </motion.a>

          {/* GitHub - scales up on hover */}
          <motion.a
            href="https://github.com/ziyadsaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={50} />
          </motion.a>

          {/* Email - scales up on hover */}
          <motion.a
            href="mailto:ziyad.safouane@gmail.com"
            className="text-gray-300 hover:text-red-400 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope size={50} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
