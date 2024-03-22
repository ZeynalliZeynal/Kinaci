import Tooltip from '~/components/Tooltip.jsx'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function ButtonWithTooltip({ isDisabled = true }) {
  const [isHovering, setIsHovering] = useState(false)
  const tooltipTimeoutRef = useRef(null)

  const handleMouseEnter = () => {
    tooltipTimeoutRef.current = setTimeout(() => setIsHovering(true), 500)
  }

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimeoutRef.current)
    setIsHovering(false)
  }

  useEffect(() => {
    return () => clearTimeout(tooltipTimeoutRef.current) // Cleanup on unmount
  }, [])
  return (
    <button
      className={`relative rounded-xl md:flex hidden bg-orange-500 text-white font-semibold w-full py-[14px] ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      title="Hələ əlçatan deyil"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Kriptovalyuta ilə ödəniş et{' '}
      <Tooltip position="right" isHovering={isHovering}>
        Hələ əlçatan deyil
      </Tooltip>
    </button>
  )
}

ButtonWithTooltip.propTypes = {
  isDisabled: PropTypes.bool,
}
