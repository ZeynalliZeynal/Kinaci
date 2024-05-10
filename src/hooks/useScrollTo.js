import { useEffect, useRef, useState } from 'react'

export const useScrollToTop = (behavior = 'smooth') => {
  const [scrollToTop, setScrollToTop] = useState(true)

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior })
      setScrollToTop(false)
    }
  }, [scrollToTop])
}

export const useScrollToRef = (dependency) => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }, [ref, dependency])
  return ref
}
