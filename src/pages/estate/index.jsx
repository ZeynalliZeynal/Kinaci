import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import EstatesCards from '~/pages/estate/estatesCards/index.jsx'

export default function Estate() {
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
