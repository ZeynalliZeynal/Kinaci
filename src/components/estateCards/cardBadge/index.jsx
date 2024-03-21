import PropTypes from 'prop-types'

export default function CardBadge({ estate }) {
  return (
    <span
      className={`rounded-button absolute top-2 right-2 ${estate.feature === 'Yeni' ? 'bg-blue-700' : estate.feature === 'Sərfəli' ? 'bg-red-600' : estate.feature === 'Dəbdəbəli' ? 'special-badge' : 'bg-orange-500'} text-white text-md font-medium px-3 py-1`}
    >
      {estate.feature?.toUpperCase()}
    </span>
  )
}

CardBadge.propTypes = {
  estate: PropTypes.object,
}
