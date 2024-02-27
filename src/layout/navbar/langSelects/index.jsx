import { useState } from 'react'
import { langOptions } from '~/data/navbar.jsx'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'

export default function LangSelects() {
  const [selectedLang, setSelectedLang] = useState(langOptions[0].title)
  const [selectedFlag, setSelectedFlag] = useState(langOptions[0].flag)
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
        <span className="size-4">
          <img src={selectedFlag} alt={selectedLang} />
        </span>{' '}
        {selectedLang}
      </button>
      {isOpen && (
        <ul className="absolute top-[140%] flex-col shadow-language rounded-button w-full">
          {langOptions.map((lang, index) => (
            <li key={index} className="w-full">
              <button
                disabled={!lang.availability}
                className="primary-button w-full justify-start flex-nowrap bg-white hover:bg-blue-50 disabled:bg-white disabled:cursor-not-allowed"
                onClick={() => handleSelect(lang)}
              >
                <span className="size-4">
                  <img src={lang.flag} alt={lang.title} />
                </span>{' '}
                {lang.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
