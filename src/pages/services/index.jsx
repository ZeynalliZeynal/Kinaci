import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'

export default function Services() {
  useEffect(() => {
    document.title = 'Kinaci - Xidmətlər'
  }, [])
  return (
    <main>
      <section>
        <Search />
      </section>
    </main>
  )
}
