import { PropTypes } from 'prop-types'
export default function Features({ estateItem }) {
  const {
    info_expanded: {
      rooms,
      bedrooms,
      bath,
      area,
      constructor_date,
      type,
      garages,
    },
  } = estateItem
  return (
    <div className="features">
      <ul className="px-8 py-4">
        <li>
          <span className="rounded-xl border border-blue-900 size-[50px]"></span>
        </li>
      </ul>
    </div>
  )
}

Features.propTypes = {
  estateItem: PropTypes.object,
}
