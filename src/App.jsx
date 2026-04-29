import React, { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { CustomCursor, CinematicGrain } from './components/PremiumEffects'
import { WhatsAppButton, SplashScreen } from './components/UltimateFeatures'
import './index.css'
import './components/PremiumEffects.css'
import './components/UltimateFeatures.css'

// Lazy load below-the-fold components
const VideoShowcase = lazy(() => import('./components/VideoShowcase'))
const Gallery = lazy(() => import('./components/Gallery'))
const Masterplan = lazy(() => import('./components/Masterplan'))
const AgentProfile = lazy(() => import('./components/AgentProfile'))
const ClientsCarousel = lazy(() => import('./components/ClientsCarousel'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <VideoShowcase />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <Masterplan />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <AgentProfile />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '30vh' }} />}>
          <ClientsCarousel />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: '20vh' }} />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
