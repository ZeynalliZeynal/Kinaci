import Logo from '~/assets/img/logo.svg'
import { NavLink } from 'react-router-dom'
import NavBottomLinks from './navBottomLinks'

export default function NavBottom() {
  return (
    <nav className="h-[95px]">
      <div className="container h-full">
        <div className="flex items-center h-full">
          <div className="w-1/6">
            <NavLink to="/" className="logo h-[65px]">
              <img className="object-contain" src={`${Logo}`} alt="Kinaci" />
            </NavLink>
          </div>
          <div className="w-7/12 h-full">
            <NavBottomLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}
