import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'

export default function Comments() {
  useEffect(() => {
    document.title = 'Kinaci - Şərhlər'
  }, [])
  return (
    <main>
      <section>
        <Search />
      </section>
    </main>
  )
}
