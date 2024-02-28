import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ExtendedLinks from './extendedLinks'

export default function NavBottomLink({ props }) {
  return (
    <li className="h-full relative">
      <NavLink to={props.to} className="font-semibold h-full">
        {({ isActive }) => (
          <span
            className={classNames(
              'relative h-full inline-flex items-center gap-2',
              {
                "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500":
                  isActive,
              },
            )}
          >
            {props.pathName}{' '}
            {props.extendable && (
              <span className={classNames({ 'text-orange-500': isActive })}>
                {isActive ? (
                  <svg
                    width="7"
                    height="5"
                    viewBox="0 0 7 5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.873865 4.82569H6.12387C6.17702 4.82553 6.22912 4.81087 6.27456 4.78329C6.32 4.75572 6.35706 4.71627 6.38176 4.6692C6.40645 4.62213 6.41783 4.56921 6.41469 4.51615C6.41154 4.46309 6.39399 4.41189 6.36391 4.36807L3.73891 0.576402C3.63012 0.419194 3.3682 0.419194 3.25912 0.576402L0.634115 4.36807C0.603731 4.4118 0.585913 4.46303 0.582597 4.51618C0.579281 4.56933 0.590594 4.62237 0.615307 4.66954C0.64002 4.71671 0.677187 4.75621 0.722771 4.78374C0.768356 4.81127 0.820613 4.82578 0.873865 4.82569Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="7"
                    height="5"
                    viewBox="0 0 7 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.12418 0.458486L0.874182 0.458486C0.821028 0.458653 0.768926 0.473313 0.723484 0.500888C0.678043 0.528463 0.640982 0.567909 0.616292 0.614981C0.591601 0.662052 0.580215 0.714966 0.58336 0.768027C0.586505 0.821088 0.604062 0.872286 0.63414 0.916111L3.25914 4.70778C3.36793 4.86499 3.62985 4.86499 3.73893 4.70778L6.36393 0.916111C6.39432 0.872377 6.41213 0.821153 6.41545 0.768003C6.41877 0.714854 6.40745 0.661813 6.38274 0.614642C6.35803 0.567471 6.32086 0.527974 6.27528 0.500443C6.22969 0.472913 6.17743 0.458402 6.12418 0.458486Z"
                      fill="#052841"
                    />
                  </svg>
                )}
              </span>
            )}
          </span>
        )}
      </NavLink>
      {props.extendable && <ExtendedLinks props={props.extendable} />}
    </li>
  )
}

NavBottomLink.propTypes = {
  props: PropTypes.object,
  to: PropTypes.string,
  pathName: PropTypes.string,
  extendable: PropTypes.any,
}
