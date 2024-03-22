import classNames from 'classnames'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export default function Tooltip({ position, isHovering, children }) {
  return (
    <motion.div
      animate={isHovering ? 'open' : 'initial'}
      transition={{
        duration: 0.15,
        ease: 'easeIn',
      }}
      variants={{
        initial: {
          scale: 0,
        },
        open: { scale: 1 },
      }}
      className={classNames(
        'absolute bg-white text-blue-900 text-xs rounded-lg flex w-max p-3 shadow-tooltip',
        {
          'left-[105%]': position === 'right',
          'top-[105%]': position === 'bottom',
          'right-[105%]': position === 'left',
          'bottom-[105%]': position === 'top',
        },
      )}
    >
      {children}
    </motion.div>
  )
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['right', 'bottom', 'left', 'top']),
  children: PropTypes.string,
  isHovering: PropTypes.bool,
}
