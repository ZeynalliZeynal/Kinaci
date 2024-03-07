import NavBottomLink from './navBottomLink'
import { navLinks } from '~/data/navbar/navLinks.jsx'

export default function NavBottomLinks() {
  return (
    <ul className="h-full justify-between text-sm">
      {navLinks.map((link, index) => (
        <NavBottomLink props={link} key={index} />
      ))}
    </ul>
  )
}
