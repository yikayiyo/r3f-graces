import MainContent from './components/MainContent'
// import Header from './components/Header'
import Footer from './components/Footer'
import { Leva } from 'leva'
import Lenis from '@studio-freight/lenis'
import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

type LenisRef = {
  wrapper?: HTMLElement
  content?: HTMLElement
  lenis?: Lenis
}

function App() {
  const lenisRef = useRef<LenisRef>(null)
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      {/* <Header /> */}
      <div className="main relative bg-[#000]">
        <MainContent />
        <Leva collapsed/>
      </div>
      <Footer />
    </ReactLenis>
  )
}

export default App
