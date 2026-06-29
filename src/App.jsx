import { useEffect, useRef, useState } from 'react'
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
import Loader from './components/Loader'
import logoCabecalho from './assets/logos/logo-cabecalho.png'
import { useReveal } from './hooks/useReveal'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const audioRef = useRef(null)

  useReveal()

  useEffect(() => {
    if (!hasStarted) return undefined

    const loaderTimer = window.setTimeout(() => {
      setShowLoader(false)
    }, 6000)

    return () => window.clearTimeout(loaderTimer)
  }, [hasStarted])

  const handleStartProtocol = async () => {
    if (hasStarted) return

    setHasStarted(true)
    setShowLoader(true)

    try {
      const audio = new Audio('/audio/loader-sfx.mp3')
      audio.volume = 0.32
      audio.loop = false
      audioRef.current = audio

      await audio.play()
    } catch {
      audioRef.current = null
    }
  }

  if (!hasStarted) {
    return (
      <button className="protocol-gate" type="button" onClick={handleStartProtocol}>
        <span className="protocol-gate__noise" aria-hidden="true" />
        <span className="protocol-gate__grid" aria-hidden="true" />
        <span className="protocol-gate__mark">
          <img src={logoCabecalho} alt="" />
        </span>
        <span className="protocol-gate__eyebrow">Coded by CK</span>
        <span className="protocol-gate__title">INICIAR PROTOCOLO</span>
        <span className="protocol-gate__action">CLICK TO BREACH</span>
        <span className="protocol-gate__scan" aria-hidden="true" />
      </button>
    )
  }

  if (showLoader) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <TechStrip />
        <Services />
        <Process />
        <ClientMode />
        <Differentials />
        <Tools />
      </main>
      <Footer />
    </>
  )
}

export default App
