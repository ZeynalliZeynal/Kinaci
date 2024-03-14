import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'

export default function Estate() {
  useEffect(() => {
    document.title = 'Kinaci - Əmlak'
  }, [])
  return (
    <main>
      <section className="bg-blue-900">
        <Search />
      </section>
    </main>
  )
}
