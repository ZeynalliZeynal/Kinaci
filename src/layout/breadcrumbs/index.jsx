import { NavLink, useLocation } from 'react-router-dom'
import { PiCaretRight } from 'react-icons/pi'

export default function Breadcrumbs() {
  const location = useLocation()
  let currentLink = ''

  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '')

  const toCamelCase = (str) => {
    const firstLetter = str.split('').at(0).toUpperCase().split('')
    const restOfStr = str.split('').slice(1)
    return firstLetter
      .concat(restOfStr)
      .join('')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
  }

  return (
    <section className="print-hidden h-[70px] text-xxs text-blue-900/50">
      <div className="container">
        <div className="flex">
          <NavLink to="/" className="hover:text-blue-900 px-2 py-1">
            <span>Ana Səhifə</span>
          </NavLink>{' '}
          {crumbs.map((crumb, index) => {
            currentLink += `/${crumb}`
            const isLast = index === crumbs.length - 1
            return (
              <span key={index} className="inline-flex items-center">
                <span>
                  <PiCaretRight />
                </span>{' '}
                <span key={crumb}>
                  {isLast ? (
                    <span
                      className={`px-2 py-1 rounded-lg ${isLast ? 'bg-blue-900/5' : ''}`}
                    >
                      {toCamelCase(crumb)}
                    </span>
                  ) : (
                    <NavLink
                      to={currentLink}
                      className="px-2 py-1 hover:text-blue-900/80"
                    >
                      {toCamelCase(crumb)}
                    </NavLink>
                  )}{' '}
                </span>
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
