export default function CardBadge({ estate }) {
  return (
    <span
      className={`rounded-button absolute top-2 right-2 bg-${estate.feature === 'Yeni' ? 'blue-700' : estate.feature === 'Fürsət' ? 'red-600' : 'orange-500'} text-white text-md font-medium px-3 py-1`}
    >
      {estate.feature?.toUpperCase()}
    </span>
  )
}
