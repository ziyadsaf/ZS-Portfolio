import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-5xl">Home Section</h1>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
        <h1 className="text-white text-5xl">About Section</h1>
      </section>

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
