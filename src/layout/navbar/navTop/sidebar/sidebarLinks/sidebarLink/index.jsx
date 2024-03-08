import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function SidebarLink({ props }) {
  return (
    <li className="h-full group">
      <NavLink
        to={props.to}
        className="font-semibold h-full hover:translate-x-1"
      >
        {({ isActive }) => (
          <span className={classNames({ 'text-orange-500': isActive })}>
            {props.pathName}
          </span>
        )}
      </NavLink>{' '}
    </li>
  )
}

SidebarLink.propTypes = {
  props: PropTypes.object,
  to: PropTypes.string,
  pathName: PropTypes.string,
}
