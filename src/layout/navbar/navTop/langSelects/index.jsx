import { useState } from 'react'
import { langOptions } from '~/data/navbar.jsx'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'
import PropTypes from 'prop-types'

export default function LangSelects({ data }) {
  const [selectedLang, setSelectedLang] = useState(data[0].title)
  const [selectedFlag, setSelectedFlag] = useState(data[0].flag)
  const [isOpen, setIsOpen] = useState(false)

  function handleSelect(lang) {
    setSelectedLang(lang.title)
    setSelectedFlag(lang.flag)
    setIsOpen(false)
  }

  return (
    <div className="dropdown relative">
      <button
        className="primary-button bg-white"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>
          {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </span>
        {selectedFlag && (
          <span className="size-4">
            <img src={selectedFlag} alt={selectedLang} />
          </span>
        )}

        {selectedLang}
      </button>
      {isOpen && (
        <ul className="absolute top-[140%] flex-col shadow-language rounded-button w-full">
          {data.map((item, index) => (
            <li key={index} className="w-full">
              <button
                disabled={!item.availability}
                className="primary-button w-full justify-start flex-nowrap bg-white hover:bg-blue-50 disabled:bg-white disabled:cursor-not-allowed"
                onClick={() => handleSelect(item)}
              >
                {item.flag && (
                  <span className="size-4">
                    <img src={item.flag} alt={item.title} />
                  </span>
                )}
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

LangSelects.propTypes = {
  data: PropTypes.array,
}
