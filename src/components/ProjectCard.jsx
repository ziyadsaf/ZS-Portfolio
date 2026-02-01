import { motion } from 'framer-motion';

function ProjectCard({ title, description, technologies }) {
  // Animation variant for each card - used by parent container's stagger
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 transition-all hover:bg-gray-750 hover:shadow-xl hover:shadow-indigo-500/20"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}  // Card grows slightly on hover
      transition={{ duration: 0.3 }}  // Smooth transition
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 bg-yellow-900 text-yellow-200 text-sm rounded">
          Coming Soon
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
