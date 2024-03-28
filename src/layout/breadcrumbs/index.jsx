import { NavLink, useLocation } from 'react-router-dom'
import { PiCaretRight } from 'react-icons/pi'
import { useTranslation } from 'react-i18next'

export default function Breadcrumbs() {
  const { t } = useTranslation()

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
            <span>{t('home')}</span>
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
                      {toCamelCase(t(crumb))}
                    </span>
                  ) : (
                    <NavLink
                      to={currentLink}
                      className="px-2 py-1 hover:text-blue-900/80"
                    >
                      {toCamelCase(t(crumb))}
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
