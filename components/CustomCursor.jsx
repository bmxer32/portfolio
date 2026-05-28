'use client'
import { useEffect, useState } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Only enable cursor logic on devices that support hover/pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const checkHover = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', checkHover)

    // Initially position out of screen
    setPosition({ x: -100, y: -100 })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [])

  return (
    <div 
      className={`${styles.cursor} ${isHovered ? styles.hovered : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}
