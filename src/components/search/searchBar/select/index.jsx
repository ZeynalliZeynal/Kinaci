import PropTypes from 'prop-types'
import {
  Caret,
  ClearButton,
  SelectBadge,
} from '~/components/search/searchBar/select/buttons/SelectBarIcons.jsx'
import { useEffect, useRef, useState } from 'react'
import SelectOptions from '~/components/search/searchBar/select/selectOptions/index.jsx'

export default function Select({ multiple, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  useEffect(() => {
    function handler(e) {
      if (e.target !== containerRef.current) return false
      switch (e.code) {
        case 'Enter':
          setIsOpen((prev) => !prev)
          if (isOpen) handleSelectOption(options[highlightedIndex])
          break
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true)
            break
          }
          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case 'Escape':
          setIsOpen(false)
          break
      }
    }

    containerRef.current?.addEventListener('keydown', handler)

    return () => {
      containerRef.current?.removeEventListener('keydown', handler)
    }
  }, [isOpen, highlightedIndex])

  function handleClearOptions() {
    multiple ? onChange([]) : onChange({ label: 'Əmlakınızı seçin...' })
  }

  function handleSelectOption(option) {
    if (multiple) {
      if (value.includes(option)) onChange(value.filter((o) => o !== option))
      else onChange([...value, option])
    } else if (option !== value) onChange(option)
    setIsOpen(false)
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="relative transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus:border-blue-900 w-full flex cursor-pointer text-xs"
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className="grow ps-2.5 flex flex-wrap gap-2 overflow-auto max-h-[75px]">
        {multiple
          ? value.map((v) => (
              <SelectBadge
                key={v.id}
                v={v}
                handleSelectOption={handleSelectOption}
              />
            ))
          : value?.label}
      </span>
      <div className="flex">
        <ClearButton onClearOptions={handleClearOptions} />
        <span className="mx-2 w-0.5 bg-blue-900/20"></span>
        <Caret isOpen={isOpen} />
      </div>
      <SelectOptions
        isOpen={isOpen}
        options={options}
        onSelectOption={handleSelectOption}
        isOptionSelected={isOptionSelected}
        highlightedIndex={highlightedIndex}
        setHighlightedIndex={setHighlightedIndex}
      />
    </div>
  )
}

Select.propTypes = {
  multiple: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.any,
}
