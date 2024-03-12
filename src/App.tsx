import MainContent from './components/MainContent'
// import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'
import throttle from 'lodash.throttle';
import gsap from 'gsap';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const handleCursor = throttle((event: MouseEvent) => {
      event.preventDefault()
      const x = event.clientX
      const y =  event.clientY
      cursorRef.current.style.cssText = `transform: translate(${x}px, ${y}px)`
      gsap.to(cursorRef.current, {
        x: x,
        y: y,
      })
    }, 100)
    document.addEventListener('mousemove', handleCursor)
    return () => {
      document.removeEventListener('mousemove', handleCursor)
    }
  }, [])
  return (
    <>
      {/* <Header /> */}
      <div className="main relative">
        <MainContent />
        <div ref={cursorRef} className="cursor fixed top-0 left-0 w-6 h-6 rounded-full bg-white/60"></div>
      </div>
      <Footer />
    </>
  )
}

export default App
