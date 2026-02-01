import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A description of this project will go here.",
      technologies: []
    },
    {
      title: "Project Two",
      description: "A description of this project will go here.",
      technologies: []
    },
    {
      title: "Project Three",
      description: "A description of this project will go here.",
      technologies: []
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
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Title animates in when scrolled into view */}
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
