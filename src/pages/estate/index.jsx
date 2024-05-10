import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import EstatesCards from '~/pages/estate/estatesCards/index.jsx'
import { useScrollToRef } from '~/hooks/useScrollTo.js'

export default function Estate() {
  const ref = useScrollToRef()
  useEffect(() => {
    document.title = 'Kinaci - Əmlak'
  }, [])
  return (
    <main>
      <section className="bg-blue-900">
        <Search />
      </section>
      <div ref={ref}>
        <EstatesCards />
      </div>
    </main>
  )
}
