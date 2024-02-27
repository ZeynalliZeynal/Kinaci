import { Button, ButtonLink } from '~/components/Button.jsx'
import { IoMailOutline } from 'react-icons/io5'

export default function Navbar() {
  return (
    <header>
      <nav className="h-[57px] bg-blue-50 text-sm">
        <div className="container h-full">
          <div className="flex items-center h-full">
            <ul>
              <li>
                <ButtonLink
                  icon={<IoMailOutline />}
                  linkType="mail"
                  mailto="info@kinacigroup.com"
                >
                  info@kinacigroup.com
                </ButtonLink>
              </li>
              <li>
                <ButtonLink linkType="tel" telNumber="90(544)1380707">
                  +90(544) 138 07 07
                </ButtonLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
