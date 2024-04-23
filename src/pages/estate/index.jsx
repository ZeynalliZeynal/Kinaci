import Search from '~/components/search/index.jsx'
import { useEffect, useState } from 'react'
import EstatesCards from '~/pages/estate/estatesCards/index.jsx'

export default function Estate() {
  const [scrollToTop, setScrollToTop] = useState(true)

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setScrollToTop(false)
    }
  }, [scrollToTop])
  useEffect(() => {
    document.title = 'Kinaci - Əmlak'
  }, [])
  return (
    <main>
      <section className="bg-blue-900">
        <Search />
      </section>
      <EstatesCards />
    </main>
  )
}
