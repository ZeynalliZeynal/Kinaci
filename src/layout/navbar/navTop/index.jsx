import { HiBars3BottomLeft } from 'react-icons/hi2'
import ContactLinks from '~/layout/navbar/navTop/contactLinks'
import LangSelects from '~/layout/navbar/navTop/langSelects'
import FavoriteButton from '~/layout/navbar/navTop/favouriteButton'
import { langOptions, valueOptions } from '~/data/navbar/langOptions.jsx'
import Sidebar from '~/layout/navbar/navTop/sidebar/index.jsx'
import { useState } from 'react'

export default function NavTop() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Sidebar isOpen={isOpen} onClose={setIsOpen} />
      <nav className="h-[57px] bg-blue-50 text-sm">
        <div className="container h-full">
          <div className="flex items-center h-full">
            <div className="w-4/12 lg:w-7/12">
              <div className="flex items-center gap-2.5">
                <div className="sidebar-icon block lg:hidden">
                  <button
                    className="size-6"
                    onClick={() => setIsOpen((open) => !open)}
                  >
                    <HiBars3BottomLeft />
                  </button>
                </div>
                <ContactLinks />
              </div>
            </div>
            <div className="w-8/12 lg:w-5/12">
              <div className="flex items-center justify-end gap-2.5">
                <div className="favourites hidden lg:block">
                  <FavoriteButton />
                </div>
                <div className="lang flex gap-2.5">
                  {/* TODO: SOLVE THE BUG*/}
                  <LangSelects data={langOptions} />
                  <LangSelects data={valueOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}