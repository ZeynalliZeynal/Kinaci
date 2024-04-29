import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

export default function ExtendedLink({ props }) {
  return (
    <li className="h-full w-max">
      <NavLink to={props.to} className="font-base h-full hover:text-orange-500">
        {({ isActive }) => (
          <span className={classNames({ 'text-orange-500': isActive })}>
            {props.pathName}
          </span>
        )}
      </NavLink>
    </li>
  )
}
