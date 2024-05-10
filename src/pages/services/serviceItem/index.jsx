import { useParams } from 'react-router-dom'
import Search from '~/components/search/index.jsx'
import services from '~/data/services.js'
import { useScrollToRef } from '~/hooks/useScrollTo.js'

export default function ServiceItem() {
  const param = useParams()
  const ref = useScrollToRef(param.service)
  const filteredServices = services.find(
    (service) => service.link === param.service,
  )

  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section ref={ref} className="py-[50px]">
        <div className="container">
          <div>
            <h2 className="mb-6">{filteredServices?.title}</h2>
            <div
              className="h-[500px] rounded-xl mb-[50px]"
              style={{
                backgroundImage: `url(${filteredServices?.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <p className="whitespace-pre-wrap px-[40px]">
              {filteredServices?.fullDesc}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
