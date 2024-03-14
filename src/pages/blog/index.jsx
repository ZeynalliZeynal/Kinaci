import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    document.title = 'Kinaci - Bloq'
  }, [])
  return (
    <main>
      <section>
        <Search />
      </section>
    </main>
  )
}
