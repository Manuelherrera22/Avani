import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Masterplan from './components/Masterplan'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import VideoShowcase from './components/VideoShowcase'
import AgentProfile from './components/AgentProfile'
import { CustomCursor, CinematicGrain } from './components/PremiumEffects'
import { WhatsAppButton, SplashScreen } from './components/UltimateFeatures'
import './index.css'
import './components/PremiumEffects.css'
import './components/UltimateFeatures.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <SplashScreen />
      <CustomCursor />
      <CinematicGrain />
      <WhatsAppButton />
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Gallery />
        <Masterplan />
        <AgentProfile />
      </main>
      <Footer />
    </>
  )
}

export default App
