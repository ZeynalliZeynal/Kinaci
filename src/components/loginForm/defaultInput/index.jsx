import PropTypes from 'prop-types'

export default function DefaultInput({ placeholder, type }) {
  return (
    <span className="border border-blue-900/25 rounded-selectBtn text-sm p-[15px] bg-white text-blue-900 w-full">
      <input
        className="placeholder:text-blue-900/50"
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        required
      />
    </span>
  )
}

DefaultInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
}
