import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900">
        <h1 className="text-white text-5xl">Contact Section</h1>
      </section>
    </div>
  )
}

export default App
