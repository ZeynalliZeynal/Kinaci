import classNames from 'classnames'

export default function TabBtns({
  text,
  sellingType,
  activeSellingType,
  setActiveSellingType,
}) {
  return (
    <button
      className={classNames(
        'rounded-button border px-4 py-2 border-orange-500 text-orange-500 ',
        {
          'bg-orange-500 border-transparent text-white':
            activeSellingType === sellingType,
        },
      )}
      onClick={(e) => setActiveSellingType(e.target.dataset.sellingType)}
      data-selling-type={sellingType}
    >
      {text}
    </button>
  )
}
