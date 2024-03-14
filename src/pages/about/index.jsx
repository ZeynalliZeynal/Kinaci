import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'Kinaci - Şirkət haqqında'
  }, [])
  return (
    <main>
      <section className="bg-blue-900">
        <Search />
      </section>
    </main>
  )
}
