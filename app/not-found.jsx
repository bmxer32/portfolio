"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [lines, setLines] = useState([])

  const terminalSequence = [
    "INITIATING CONNECTION...",
    "ERR_CONNECTION_REFUSED",
    "SEARCHING ARCHIVES...",
    "STATUS: 404 NOT FOUND",
    "THE REQUESTED RESOURCE HAS BEEN PURGED.",
    "RECOMMENDATION: RETURN TO BASE."
  ]

  useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < terminalSequence.length) {
        setLines(prev => [...prev, terminalSequence[currentLine]])
        currentLine++
      } else {
        clearInterval(interval)
      }
    }, 800)

    const handleMouseMove = (e) => {
      // Calculate position relative to the container if needed, 
      // but for fixed/viewport it's e.clientX/Y.
      // Since container is not fixed, let's use pageX/pageY
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [terminalSequence.length])

  return (
    <div className={styles.container}>
      <div 
        className={styles.flashlight} 
        style={{ 
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 80%)` 
        }}
      />
      
      {/* Background grid */}
      <div className={styles.grid} />

      <div className={styles.content}>
        <h1 className={styles.glitch} data-text="404">404</h1>
        
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span className={styles.dot} style={{background: '#ff5f57'}}></span>
            <span className={styles.dot} style={{background: '#febc2e'}}></span>
            <span className={styles.dot} style={{background: '#28c840'}}></span>
          </div>
          <div className={styles.terminalBody}>
            {lines.map((line, i) => (
              <p key={i} className={styles.line}>{"> " + line}</p>
            ))}
            <p className={styles.cursor}>_</p>
          </div>
        </div>

        <Link href="/" className="btn-primary" style={{ marginTop: '20px' }}>
          Эвакуация на главную
        </Link>
      </div>
    </div>
  )
}
