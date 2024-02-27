import { HiBars3BottomLeft } from 'react-icons/hi2'
import ContactLinks from '~/layout/navbar/contactLinks'
import FavoriteButton from '~/layout/navbar/favouriteButton'
import LangSelects from '~/layout/navbar/langSelects/index.jsx'

export default function Navbar() {
  return (
    <header>
      <nav className="h-[57px] bg-blue-50 text-sm">
        <div className="container h-full">
          <div className="flex items-center h-full">
            <div className="w-7/12">
              <div className="flex items-center gap-2.5">
                <div className="sidebar-icon">
                  <button className="size-6">
                    <HiBars3BottomLeft />
                  </button>
                </div>
                <ContactLinks />
              </div>
            </div>
            <div className="w-5/12">
              <div className="flex items-center justify-end gap-2.5">
                <div className="favourites">
                  <FavoriteButton />
                </div>
                <div className="lang">
                  <LangSelects />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
