import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

export default function SidebarLink({ props }) {
  return (
    <li className="h-full group">
      <NavLink
        to={props.to}
        className="font-semibold h-full hover:translate-x-1"
      >
        {({ isActive }) => (
          <span className={classNames({ 'text-orange-500': isActive })}>
            {props.name}
          </span>
        )}
      </NavLink>{' '}
    </li>
  )
}
