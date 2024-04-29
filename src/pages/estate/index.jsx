import Search from '~/components/search/index.jsx'
import { useEffect, useRef } from 'react'
import EstatesCards from '~/pages/estate/estatesCards/index.jsx'

export default function Estate() {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
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
