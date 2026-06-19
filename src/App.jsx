import Header from './components/Header'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import ClientMode from './components/ClientMode'
import Differentials from './components/Differentials'
import Tools from './components/Tools'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <Process />
        <Projects />
        <ClientMode />
        <Differentials />
        <Tools />
      </main>
      <Footer />
    </>
  )
}

export default App
