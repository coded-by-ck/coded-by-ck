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
import { useReveal } from './hooks/useReveal'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const audioRef = useRef(null)

  useReveal(!showLoader)

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setShowLoader(false)
    }, 6000)

    return () => window.clearTimeout(loaderTimer)
  }, [])

  useEffect(() => {
    if (!showLoader) return undefined

    let audio

    try {
      audio = new Audio('/audio/loader-sfx.mp3')
      audio.volume = 0.32
      audio.loop = false
      audioRef.current = audio

      audio.play().catch(() => {
        audioRef.current = null
      })
    } catch {
      audioRef.current = null
    }

    return () => {
      if (!audio) return
      audio.pause()
      audioRef.current = null
    }
  }, [showLoader])

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
