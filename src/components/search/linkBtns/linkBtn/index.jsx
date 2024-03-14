import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function LinkBtn({
  onAction,
  color = 'white',
  bgColor,
  children,
  to,
}) {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(to)
  }

  function handleClick() {
    console.log('success')
  }

  return (
    <li>
      <button
        className={`primary-button text-${color} bg-${bgColor}`}
        onClick={to ? handleNavigate : handleClick}
      >
        {children}
      </button>
    </li>
  )
}

LinkBtn.propTypes = {
  children: PropTypes.string.isRequired,
  onAction: PropTypes.func,
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
