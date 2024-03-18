import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function DefaultBtn({ type, children }) {
  return (
    <button
      type={type}
      className={classNames(
        'py-3 px-8 rounded-selectBtn w-full font-semibold gap-3',
        {
          'bg-orange-500 text-white hover:bg-orange-600': type === 'submit',
        },
      )}
    >
      {children}
    </button>
  )
}

DefaultBtn.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.any.isRequired,
}
