import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(ref.current)
  }, [])

  return [isVisible, ref]
}
