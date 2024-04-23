import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export default function SidebarLink({ props }) {
  const { t } = useTranslation()
  return (
    <li className="h-full group">
      <NavLink
        to={props.to}
        className="font-semibold h-full hover:translate-x-1"
      >
        {({ isActive }) => (
          <span className={classNames({ 'text-orange-500': isActive })}>
            {t(props.pathName)}
          </span>
        )}
      </NavLink>{' '}
    </li>
  )
}
