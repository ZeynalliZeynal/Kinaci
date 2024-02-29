import Logo from '~/assets/img/logo.svg'
import { NavLink } from 'react-router-dom'
import NavBottomLinks from './navBottomLinks'
import ContactIcons from './contactIcons'

export default function NavBottom() {
  return (
    <nav className="h-[95px] shadow-navbar">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="w-1/2 xl:w-1/6">
            <NavLink to="/" className="logo h-[65px]">
              <img className="object-contain" src={`${Logo}`} alt="Kinaci" />
            </NavLink>
          </div>
          <div className="w-7/12 h-full hidden xl:block">
            <NavBottomLinks />
          </div>
          <div className="w-1/2 xl:w-4/12">
            <ContactIcons />
          </div>
        </div>
      </div>
    </nav>
  )
}
