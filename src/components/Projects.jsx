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

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <br></br>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
