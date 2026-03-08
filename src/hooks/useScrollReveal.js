import { useEffect } from 'react'

// Adds "visible" class to all elements with reveal / reveal-left / reveal-right
// when they scroll into view. Call once at top level (App).
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
