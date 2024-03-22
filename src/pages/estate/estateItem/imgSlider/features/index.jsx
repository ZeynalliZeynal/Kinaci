import PropTypes from 'prop-types'
import Svg from '~/components/Svg.jsx'

export default function Features({ estateItem }) {
  return (
    <div className="features px-8">
      <ul className="py-4 gap-8 text-md flex-wrap justify-start border-b border-blue-900/10">
        {estateItem?.bedrooms && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="bed" />
            </span>
            <div className="grid">
              <span className="font-semibold">Yataq otağı</span>
              <span>
                {estateItem.bedrooms.map((bed, index) =>
                  index !== estateItem.bedrooms.length - 1 ? bed + ' / ' : bed,
                )}
              </span>
            </div>
          </li>
        )}{' '}
        {estateItem?.bath && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="bath" />
            </span>
            <div className="grid">
              <span className="font-semibold">Hamam</span>
              <span>{estateItem.bath}</span>
            </div>
          </li>
        )}{' '}
        {estateItem?.garage && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="garage" />
            </span>
            <div className="grid">
              <span className="font-semibold">Qaraj</span>
              <span>{estateItem.garage}</span>
            </div>
          </li>
        )}{' '}
        {estateItem?.area && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="area" />
            </span>
            <div className="grid">
              <span className="font-semibold">Obyekt sahəsi (m²)</span>
              <span>{estateItem.area}</span>
            </div>
          </li>
        )}{' '}
        {estateItem?.land_area && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="landArea" />
            </span>
            <div className="grid">
              <span className="font-semibold">Torpaq sahəsi (m²)</span>
              <span>
                <span>{estateItem.land_area}</span>
              </span>
            </div>
          </li>
        )}{' '}
        {estateItem?.type && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="type" />
            </span>
            <div className="grid">
              <span className="font-semibold">Tip</span>
              <span>{estateItem.type}</span>
            </div>
          </li>
        )}{' '}
        {estateItem?.rooms && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="room" />
            </span>
            <div className="grid">
              <span className="font-semibold">Otaqlar</span>
              <span>
                {estateItem.rooms.map((bed, index) =>
                  index !== estateItem.rooms.length - 1 ? bed + ' / ' : bed,
                )}
              </span>
            </div>
          </li>
        )}{' '}
        {estateItem?.balcony && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="balcony" />
            </span>
            <div className="grid">
              <span className="font-semibold">Eyvan</span>
              <span>
                <span>{estateItem.balcony}</span>
              </span>
            </div>
          </li>
        )}{' '}
        {estateItem?.constructor_date && (
          <li className="gap-4">
            <span className="rounded-xl border border-blue-900 size-[50px] p-3">
              <Svg svgType="year" />
            </span>
            <div className="grid">
              <span className="font-semibold">Tikinti ili</span>
              <span>
                {estateItem.constructor_date &&
                  new Intl.DateTimeFormat('az-AZ', { year: 'numeric' }).format(
                    new Date(estateItem.constructor_date),
                  )}
              </span>
            </div>
          </li>
        )}{' '}
      </ul>
    </div>
  )
}

Features.propTypes = {
  estateItem: PropTypes.object,
}
