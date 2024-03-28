import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export default function ExtendedLink({ props }) {
  const { t } = useTranslation()
  return (
    <li className="h-full w-max">
      <NavLink to={props.to} className="font-base h-full hover:text-orange-500">
        {({ isActive }) => (
          <span className={classNames({ 'text-orange-500': isActive })}>
            {t(props.pathName)}
          </span>
        )}
      </NavLink>
    </li>
  )
}
