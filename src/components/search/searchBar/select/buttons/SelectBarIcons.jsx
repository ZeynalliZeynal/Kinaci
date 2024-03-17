import PropTypes from 'prop-types'

export function ClearButton({ onClearOptions }) {
  return (
    <button
      type="button"
      className="size-4 text-white hover:text-orange-500/20 rounded"
      onClick={(e) => {
        e.stopPropagation()
        onClearOptions()
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="12" fill="currentColor" />
        <path
          d="M20.4 44.2L44.4 20.2"
          stroke="#052841"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M44 44L20 20"
          stroke="#052841"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

export function Caret({ isOpen }) {
  return (
    <span className={`size-4 ${isOpen ? 'text-orange-500' : ''}`}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

export function SelectBadge({ v, handleSelectOption }) {
  return (
    <button
      className="px-2 py-1 flex-nowrap rounded-selectBtn border-2 border-blue-900/20 hover:bg-blue-900/5"
      key={v.id}
      onClick={(e) => {
        e.stopPropagation()
        handleSelectOption(v)
      }}
    >
      {v.label}{' '}
      <span className="size-4">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" rx="32" fill="none" />
          <path
            d="M20.4 44.2L44.4 20.2"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M44 44L20 20"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  )
}

Caret.propTypes = {
  isOpen: PropTypes.bool,
}
SelectBadge.propTypes = {
  v: PropTypes.object,
  handleSelectOption: PropTypes.func,
}
