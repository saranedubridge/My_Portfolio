
import './App.css'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import Credentials from './components/Credentials'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <Skills />
        <Service />
        <Projects />
        <Credentials/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
