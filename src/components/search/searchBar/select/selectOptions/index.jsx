import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

export default function SelectOptions({
  isOpen,
  options,
  onSelectOption,
  isOptionSelected,
  highlightedIndex,
  setHighlightedIndex,
}) {
  useEffect(() => {
    setHighlightedIndex(0)
  }, [isOpen])

  return (
    <motion.ul
      animate={isOpen ? 'open' : 'initial'}
      variants={{
        initial: { rotateX: -90, opacity: 0, visibility: 'hidden' },
        open: { rotateX: 0, opacity: 1, visibility: 'visible' },
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      className="origin-top gap-2 absolute z-50 mt-2 flex-col top-full left-0 items-start bg-white w-full px-2.5 py-4 rounded-button border border-blue-900/25 overflow-y-scroll"
    >
      {options.map((option, index) => (
        <li
          key={option.id}
          className={classNames(
            'block w-full justify-start cursor-pointer py-2 rounded-button px-2.5 transition-colors',
            {
              'relative after:absolute after:content-[""] after:bottom-0 after:left-2.5 after:rounded after:w-1/2 after:h-0.5 after:bg-orange-500':
                isOptionSelected(option),
              'bg-orange-50': index === highlightedIndex,
            },
          )}
          onClick={(e) => {
            e.stopPropagation()
            onSelectOption(option)
          }}
          onMouseEnter={() => setHighlightedIndex(index)}
        >
          {option.label}
        </li>
      ))}
    </motion.ul>
  )
}

SelectOptions.propTypes = {
  isOpen: PropTypes.bool,
  options: PropTypes.array,
  onSelectOption: PropTypes.func,
  isOptionSelected: PropTypes.func,
  highlightedIndex: PropTypes.number,
  setHighlightedIndex: PropTypes.func,
}
