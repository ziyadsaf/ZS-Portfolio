import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <Hero />

      <About />

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-5xl">Projects Section</h1>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900">
        <h1 className="text-white text-5xl">Contact Section</h1>
      </section>
    </div>
  )
}

export default App
