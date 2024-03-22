import EstateInfo from '~/pages/estate/estateItem/estateInfo/index.jsx'
import { useEffect, useState } from 'react'

export default function EstateItem() {
  const [scrollToTop, setScrollToTop] = useState(true)

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0)
      setScrollToTop(false) // Reset flag to prevent infinite looping
    }
  }, [scrollToTop])
  return (
    <main className="bg-gray-100">
      <EstateInfo />
    </main>
  )
}
