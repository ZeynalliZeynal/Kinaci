import { HiBars3BottomLeft } from 'react-icons/hi2'
import ContactLinks from '~/layout/navbar/navTop/contactLinks'
import Sidebar from '~/layout/navbar/navTop/sidebar/index.jsx'
import { useState } from 'react'
import AddToFav from '~/redux/features/addToFav/AddToFav.jsx'

export default function NavTop() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Sidebar isOpen={isOpen} onClose={setIsOpen} />
      <nav className={'h-[57px] bg-blue-50 text-sm sticky top-0 z-[689]'}>
        <div className="container h-full">
          <div className="flex items-center justify-between h-full">
            <div className="w-1/2 lg:w-7/12">
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
            <div className="w-1/2 lg:w-5/12">
              <div className="flex items-center justify-end gap-2.5">
                <div className="favourites">
                  <AddToFav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
