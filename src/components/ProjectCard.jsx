import { motion } from 'framer-motion';

function ProjectCard({ title, description, technologies }) {
  // Animation variant for each card - used by parent container's stagger
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-[#2193b0]/10 to-[#6dd5ed]/10 rounded-lg p-6 transition-all hover:from-[#2193b0]/20 hover:to-[#6dd5ed]/20 hover:shadow-xl hover:shadow-[#2193b0]/30"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#2193b0]/20 to-[#6dd5ed]/20 text-[#6dd5ed] text-sm rounded-lg">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#2193b0]/30 to-[#6dd5ed]/30 text-[#6dd5ed] text-sm rounded-lg">
          Coming Soon
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
