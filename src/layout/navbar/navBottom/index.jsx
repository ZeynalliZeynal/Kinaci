import Logo from '~/assets/img/logo.svg'
import { NavLink } from 'react-router-dom'
import NavBottomLinks from './navBottomLinks'
import ContactIcons from '../../../components/ContactIcons.jsx'

export default function NavBottom({ isHidden }) {
  return (
    <nav
      className={`h-[95px] shadow-navbar bg-white transition-transform duration-300 relative z-[688] ${isHidden ? '-translate-y-[152px] ' : ''}`}
    >
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="w-1/2 lg:w-1/6">
            <NavLink to="/" className="logo h-[65px]">
              <img className="object-contain" src={`${Logo}`} alt="Kinaci" />
            </NavLink>
          </div>
          <div className="w-7/12 h-full hidden lg:block">
            <NavBottomLinks />
          </div>
          <div className="w-1/2 lg:w-4/12 text-end">
            <div className="flex justify-end">
              <ContactIcons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
