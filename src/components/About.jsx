function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
        <br></br>

        <div className="text-gray-300 space-y-6">
          <p className="text-lg">
            I'm a software engineer currently working as an AI Expert at Amazon AGI in Cambridge.
          </p>
          <br></br>
          <p className="text-lg">
            I graduated with a First-Class Honours in Computer Science from the University of Kent.
          </p>
          <br></br>
          <p className="text-lg">
            My experience spans backend development, cloud infrastructure, and AI/ML systems.
          </p>
          <br></br>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h3>
            <br></br>
            <div className="flex flex-wrap gap-3">
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">Python</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">SQL</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">Java</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">AWS</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">Azure</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">Linux</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">Docker</span>
              <span className="px-6 py-3 text-lg bg-gray-800 text-gray-300 rounded">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
