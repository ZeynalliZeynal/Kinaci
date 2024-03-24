import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { PiCaretRight } from 'react-icons/pi'

export default function NavigateLinks() {
  const location = useLocation()
  const locationCut = location.pathname.split('/').splice(1)
  console.log(locationCut)
  const navigate = useNavigate()
  const toCamelCase = (str) => {
    const firstLetter = str.split('').at(0).toUpperCase().split('')
    const restOfStr = str.split('').slice(1)
    return firstLetter.concat(restOfStr).join('')
  }

  return (
    <section className="h-[70px] text-xxs text-blue-900/50">
      <div className="container">
        <div className="flex">
          <NavLink to="/" className="hover:text-blue-900/80">
            {({ isActive }) => (
              <span className={`${isActive ? 'bg-blue-900/10' : ''}`}>
                Ana Səhifə{' '}
              </span>
            )}
          </NavLink>
          <span>
            <PiCaretRight />
          </span>
          {locationCut.map((link, index) => (
            <span key={index}>
              <NavLink to={link} className="hover:text-blue-900/80">
                {(
                  { isActive }, // Keep isActive for hover effect
                ) => (
                  <span
                    className={`px-2 py-1 rounded-lg ${isActive ? 'pointer-events-none' : ''} ${
                      location.pathname.startsWith(link) ||
                      index === locationCut.length - 1
                        ? 'bg-blue-900/5'
                        : ''
                    }`}
                    onClick={() => (isActive ? navigate('.') : navigate(link))}
                  >
                    >{link}{' '}
                  </span>
                )}
              </NavLink>
              {index !== locationCut.length - 1 && (
                <span>
                  <PiCaretRight />
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
