import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0d2833] via-[#1a4a5e] via-[#0d2833] to-[#0a0a0a]">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />
    </div>
  )
}

export default App
