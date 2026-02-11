import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: "F1 Telemetry Analysis",
      description: "A Python tool that analyses Formula 1 race data using the FastF1 library. Performs lap performance analysis, models tyre degradation, and generates comparative visualisations of driver performance.",
      technologies: ["Python", "FastF1", "pandas", "scikit-learn", "matplotlib"],
      github: "https://github.com/ziyadsaf/F1-telemetry-analysis"
    },
    {
      title: "Movie Success Prediction",
      description: "A machine learning project that predicts movie revenue using regression techniques, leveraging the TMDB 5000 Movies dataset. Explores budget-revenue correlations and genre trends.",
      technologies: ["Python", "scikit-learn", "pandas", "seaborn", "Jupyter"],
      github: "https://github.com/ziyadsaf/movie-success-prediction"
    },
    {
      title: "Quiz-Card",
      description: "An educational application that enables instructors to create quizzes from CSV files. Automatically generates flashcards from incorrectly answered questions for targeted review.",
      technologies: ["Python", "SQLite", "CSV", "Tkinter"],
      github: "https://github.com/ziyadsaf/Quiz-Card"
    }
  ];

  // Container animation - staggers the appearance of project cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2  // Each card appears 0.2s after the previous one
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Title animates in when scrolled into view */}
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <br></br>

        {/* Grid container with stagger animation for cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
            />
          ))}
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
        <a href="#contact" className="text-gray-500 hover:text-gray-300 transition-colors">
          <FaChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
