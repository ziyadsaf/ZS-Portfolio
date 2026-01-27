import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <br></br>

        <p className="text-lg text-gray-300 mb-12">
          Feel free to reach out to me through any of the platforms below.
        </p>
        <br></br>

        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/ziyad-safouane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={50} />
          </a>

          <a
            href="https://github.com/ziyadsaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            <FaGithub size={50} />
          </a>

          <a
            href="mailto:ziyad.safouane@gmail.com"
            className="text-gray-300 hover:text-red-400 transition-colors"
          >
            <FaEnvelope size={50} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
