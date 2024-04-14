import { Link } from 'react-router-dom'
import services from '~/data/services.js'

export default function Service() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {services.map((service) => (
        <Link to={service.link} className="grid gap-5" key={service.link}>
          <div className="rounded-xl overflow-hidden">
            <img src={service.img} alt={service.title} />
          </div>
          <div className="grid gap-2.5">
            <h4 className="text-xs text-orange-500">{service.title}</h4>
            <p className="text-sm font-semibold">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
