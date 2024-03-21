import PropTypes from 'prop-types'
import Svg from '~/components/Svg'

function currencyFormat(currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currency)
}

export default function Details({ estate }) {
  return (
    <div className="details grid grid-cols-2">
      <div className="text-xs grid gap-2.5">
        <h5>
          {estate?.city} {estate?.place && `/${estate?.place}`}
        </h5>
        <div className="icons grid grid-cols-2 gap-4">
          {estate.rooms && (
            <div className="icon flex gap-2">
              <span className="size-4">
                <Svg svgType={'room'} />
              </span>
              <span>
                {estate.rooms.length > 1 ? (
                  <b>{estate.rooms.length} more</b>
                ) : (
                  estate.rooms.map((room, index) => (
                    <span key={index}>
                      {room} {index !== estate.rooms.length - 1 && '/'}
                    </span>
                  ))
                )}
              </span>
            </div>
          )}{' '}
          {estate.area && (
            <div className="icon flex gap-2">
              <span className="size-4">
                <Svg svgType="area" />
              </span>{' '}
              {estate?.area}
            </div>
          )}{' '}
          {estate.bedrooms && (
            <div className="icon flex gap-2">
              <span className="size-4">
                <Svg svgType="bed" />
              </span>
              <span>
                {estate.bedrooms.length > 1 ? (
                  <b>{estate.bedrooms.length} more</b>
                ) : (
                  estate.bedrooms.map((bedroom, index) => (
                    <span key={index}>
                      {bedroom} {index !== estate.bedrooms.length - 1 && '/'}
                    </span>
                  ))
                )}
              </span>
            </div>
          )}{' '}
          {estate.bath && (
            <div className="icon flex gap-2">
              <span className="size-4">
                <Svg svgType="bath" />
              </span>{' '}
              {estate.bath}
            </div>
          )}
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
