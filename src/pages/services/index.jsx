import Search from '~/components/search/index.jsx'
import { useEffect } from 'react'
import Service from '~/pages/services/Service.jsx'

export default function Services() {
  useEffect(() => {
    document.title = 'Kinaci - Xidmətlər'
  }, [])
  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section className="py-[50px]">
        <div className="container">
          <h2 className="mb-6">Xidmətlərimiz</h2>
          <Service />
        </div>
      </section>
    </main>
  )
}
