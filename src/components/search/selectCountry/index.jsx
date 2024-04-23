import { Listbox, Transition } from '@headlessui/react'
import { FaCaretDown } from 'react-icons/fa'
import { Fragment, useState } from 'react'
import { countries } from '~/data/searchBar/countries.jsx'
import { IoCheckmark } from 'react-icons/io5'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export default function SelectCountry() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name)
  const { t } = useTranslation()
  return (
    <Listbox
      as="div"
      value={selectedCountry}
      onChange={setSelectedCountry}
      className="relative z-[80] w-fit"
    >
      {({ open }) => (
        <>
          <Listbox.Button className="gap-1 bg-orange-500 text-white py-[11px] px-[30px] rounded-selectBtn hover:bg-orange-600 active:bg-orange-500">
            {t(selectedCountry)}{' '}
            <span
              className={classNames('select-icon size-4', {
                'rotate-180': open,
              })}
            >
              <FaCaretDown />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-50"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-50"
          >
            <Listbox.Options className="text-white absolute mt-2 flex-col rounded-selectBtn overflow-hidden p-2 bg-orange-500 z-50">
              {countries.map((country) => (
                <Listbox.Option
                  className="relative w-full"
                  value={country.name}
                  key={country.id}
                >
                  {({ selected, active }) => (
                    <>
                      <button
                        className={classNames(
                          'justify-start cursor-pointer py-[11px] px-[30px] rounded-selectBtn w-full',
                          {
                            'bg-gradient-to-tr from-orange-500 to-[#ff935d]':
                              active || selected,
                          },
                        )}
                      >
                        {t(country.name)}
                      </button>{' '}
                      {selected && (
                        <span className="absolute left-2.5">
                          <IoCheckmark />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  )
}
