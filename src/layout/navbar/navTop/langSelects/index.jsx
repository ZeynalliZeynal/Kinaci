import { Fragment, useState } from 'react'
import { langOptions } from '~/data/navbar/langOptions.jsx'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid/index.js'

export default function LangSelects() {
  const [selected, setSelected] = useState(langOptions[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-[100px]">
        <Listbox.Button className="primary-button bg-white h-full flex-nowrap">
          <span className="flex h-4 items-center gap-3">
            <img src={selected.flag} alt={selected.title} /> {selected.title}
          </span>
          <span className="size-4">
            <ChevronUpDownIcon />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute top-[140%] flex-col shadow-language rounded-button w-full bg-white">
            {langOptions.map((lang, i) => (
              <Listbox.Option key={i} className="w-full" value={lang}>
                {({ selected }) => (
                  <button
                    disabled={!lang.availability}
                    className={`primary-button w-full justify-start flex-nowrap bg-white hover:bg-blue-50 disabled:bg-white disabled:cursor-not-allowed ${selected ? 'bg-blue-50/70' : ''}`}
                  >
                    <span className="size-4">
                      <img src={lang.flag} alt={lang.title} />
                    </span>{' '}
                    {lang.title}
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
// function handleSelect(lang) {
//   setSelectedLang(lang.title)
//   setSelectedFlag(lang.flag)
//   setIsOpen(false)
// }
// <div className="dropdown relative" onBlur={() => setIsOpen(false)}>
//   <button
//     className="primary-button bg-white"
//     onClick={() => setIsOpen((open) => !open)}
//   >
//     <span>
//       {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
//     </span>{' '}
//     {selectedFlag && (
//       <span className="size-4">
//         <img src={selectedFlag} alt={selectedLang} />
//       </span>
//     )}{' '}
//     {selectedLang}
//   </button>
//   {isOpen && (
//     <ul className="absolute top-[140%] flex-col shadow-language rounded-button w-full">
//       {langOptions.map((item, index) => (
//         <li key={index} className="w-full">
//           <button
//             disabled={!item.availability}
//             className="primary-button w-full justify-start flex-nowrap bg-white hover:bg-blue-50 disabled:bg-white disabled:cursor-not-allowed"
//             onClick={(e) => {
//               e.stopPropagation()
//               handleSelect(item)
//             }}
//           >
//             {item.flag && (
//               <span className="size-4">
//                 <img src={item.flag} alt={item.title} />
//               </span>
//             )}{' '}
//             {item.title}
//           </button>
//         </li>
//       ))}
//     </ul>
//   )}
// </div>
