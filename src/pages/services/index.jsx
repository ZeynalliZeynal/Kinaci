import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import Service from '~/pages/services/Service.jsx'
import { useScrollToRef } from '~/hooks/useScrollTo.js'

export default function Services() {
  const ref = useScrollToRef()
  useEffect(() => {
    document.title = 'Kinaci - Xidmətlər'
  }, [])
  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section className="py-[50px]" ref={ref}>
        <div className="container">
          <h2 className="mb-6">Xidmətlərimiz</h2>
          <Service />
        </div>
      </section>
    </main>
  )
}
