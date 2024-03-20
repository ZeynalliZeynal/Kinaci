import PropTypes from 'prop-types'
import { Svg } from '~/components/Svg'

function currencyFormat(currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currency)
}

export default function Details({ estate }) {
  const {
    location: { city, place },
    info: { rooms, bedrooms, bath, area },
  } = estate
  return (
    <div className="details grid grid-cols-2">
      <div className="text-xs grid gap-2.5">
        <h5>
          {city}
          {place && `/${place}`}
        </h5>
        <div className="icons grid grid-cols-2 gap-4">
          <div className="icon flex gap-2">
            <span className="size-4">
              <Svg svgType={'room'} />
            </span>
            <span>
              {rooms.map((room, index) => (
                <span key={index}>
                  {room}
                  {index !== rooms.length - 1 && '/'}
                </span>
              ))}
            </span>
          </div>
          <div className="icon flex gap-2">
            <span className="size-4"></span>
            {area}
          </div>
          <div className="icon flex gap-2">
            <span className="size-4"></span>
            <span>
              {bedrooms.map((bedroom, index) => (
                <span key={index}>
                  {bedroom}
                  {index !== bedrooms.length - 1 && '/'}
                </span>
              ))}
            </span>
          </div>
          <div className="icon flex gap-2">
            <span className="size-4"></span>
            {bath}
          </div>
        </div>
      </div>
      <div className="grid gap-2.5 justify-end">
        <p className="text-center">
          <del>{currencyFormat(161000)}</del>
        </p>
        <span className="px-4 py-2 bg-blue-700 text-white font-semibold inline-flex items-center rounded-button">
          {currencyFormat(150000)}
        </span>
      </div>
    </div>
  )
}

Details.propTypes = {
  estate: PropTypes.object,
}
