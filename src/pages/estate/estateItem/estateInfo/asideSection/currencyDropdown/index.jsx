import { Listbox, Transition } from '@headlessui/react'
import { IoChevronDown } from 'react-icons/io5'
import { Fragment } from 'react'
import currencyData from '~/data/currencyData.jsx'

export default function CurrencyDropdown({
  selectedCurrency,
  setSelectedCurrency,
}) {
  return (
    <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
      <div className="relative bg-blue-800 rounded-button h-fit">
        <Listbox.Button className="flex-nowrap gap-3 w-full px-2 py-3">
          <span className="size-4">
            <IoChevronDown />
          </span>
          <span>{selectedCurrency.type}</span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute top-[120%] w-full h-fit flex-col left-0 rounded-button p-2 bg-blue-900 z-50">
            {currencyData.map((currency, index) => (
              <Listbox.Option
                value={currency}
                key={index}
                className={({ active }) =>
                  `w-full ${active ? 'underline font-semibold bg-blue-800 rounded-button' : ''}`
                }
              >
                {({ selected }) => (
                  <button
                    className={`px-1 py-2 w-full ${selected ? 'font-bold' : ''}`}
                  >
                    {currency.type}
                  </button>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
