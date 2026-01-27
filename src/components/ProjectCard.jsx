function ProjectCard({ title, description, technologies }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
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
    </div>
  );
}

export default ProjectCard;
