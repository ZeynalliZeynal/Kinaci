import { HiBars3BottomLeft } from 'react-icons/hi2'
import ContactLinks from '~/layout/navbar/navTop/contactLinks'
import LangSelects from '~/layout/navbar/navTop/langSelects'
import FavoriteButton from '~/layout/navbar/navTop/favouriteButton'

export default function NavTop() {
  return (
    <nav className="h-[57px] bg-blue-50 text-sm">
      <div className="container h-full">
        <div className="flex items-center h-full">
          <div className="w-7/12">
            <div className="flex items-center gap-2.5">
              <div className="sidebar-icon ">
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
  )
}
