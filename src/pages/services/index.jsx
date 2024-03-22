import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'

export default function Services() {
  useEffect(() => {
    document.title = 'Kinaci - Xidmətlər'
  }, [])
  return (
    <section>
      <Search />
    </section>
  )
}
