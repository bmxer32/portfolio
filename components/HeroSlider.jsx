'use client'
import React, { useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './Hero'
import { BotShowcaseInner } from './service/BotShowcase'
import { MobileShowcaseInner } from './service/MobileShowcase'
import { WebShowcaseInner } from './service/WebShowcase'
import { DesktopShowcaseInner } from './service/DesktopShowcase'

export default function HeroSlider() {
  const containerRef = useRef(null)
  
  // Create a scroll listener for the whole slider
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [activeSlide, setActiveSlide] = useState(0)

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x
    if (swipe < -50 && activeSlide < 4) {
      setActiveSlide(s => s + 1)
    } else if (swipe > 50 && activeSlide > 0) {
      setActiveSlide(s => s - 1)
    }
  }

  // Disable pointer events on the drag container when scrolling down 
  // to avoid accidental horizontal swipes while scrolling.
  return (
    <div ref={containerRef} style={{ height: '160vh', position: 'relative' }}>
      
      {/* 
        This wrapper is sticky to the top of the viewport.
        It holds all the slides side by side.
      */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100vw', overflow: 'hidden' }}>
        
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${activeSlide * 100}vw` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ display: 'flex', width: '500vw', height: '100%', touchAction: 'pan-y' }}
        >
          
          {/* SLIDE 0: Main Hero */}
          <div style={{ width: '100vw', height: '100vh', flexShrink: 0, position: 'relative' }}>
            <Hero />
          </div>

          {/* SLIDE 1: Bot Showcase */}
          <div style={{ width: '100vw', height: '100vh', flexShrink: 0, position: 'relative' }}>
            <BotShowcaseInner scrollYProgress={scrollYProgress} />
          </div>

          {/* SLIDE 2: Mobile Showcase */}
          <div style={{ width: '100vw', height: '100vh', flexShrink: 0, position: 'relative' }}>
            <MobileShowcaseInner scrollYProgress={scrollYProgress} />
          </div>

          {/* SLIDE 3: Web Showcase */}
          <div style={{ width: '100vw', height: '100vh', flexShrink: 0, position: 'relative' }}>
            <WebShowcaseInner scrollYProgress={scrollYProgress} />
          </div>

          {/* SLIDE 4: Desktop Showcase */}
          <div style={{ width: '100vw', height: '100vh', flexShrink: 0, position: 'relative' }}>
            <DesktopShowcaseInner scrollYProgress={scrollYProgress} />
          </div>

        </motion.div>

        {/* DOT NAVIGATION */}
        <div style={{ 
          position: 'absolute', 
          bottom: 40, 
          left: 0, 
          right: 0, 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 12, 
          zIndex: 100 
        }}>
          {[0, 1, 2, 3, 4].map(i => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                background: i === activeSlide ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
