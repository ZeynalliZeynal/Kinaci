import { useEffect, useState } from 'react'

export const useScrollTop = (behavior = 'smooth') => {
  const [scrollToTop, setScrollToTop] = useState(true)

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior })
      setScrollToTop(false)
    }
  }, [scrollToTop])
}
