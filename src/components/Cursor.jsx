import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let rafId  = null

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top  = mouseY + 'px'
      }
    }

    // Smooth ring follow
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top  = ringY + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    // Hover detection for interactive elements
    const addHover = () => setHovered(true)
    const removeHover = () => setHovered(false)
    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    document.addEventListener('mousemove', onMove)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className={`cursor-ring ${hovered ? 'hovered' : ''}`} ref={ringRef} />
    </>
  )
}
