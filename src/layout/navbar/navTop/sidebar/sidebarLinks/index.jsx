import { navLinks } from '~/data/navbar/navLinks.jsx'
import SidebarLink from './sidebarLink'

export default function SidebarLinks() {
  return (
    <ul className="h-full flex-col items-start gap-3 px-[30px] py-[20px] font-semibold transition-all">
      {navLinks.map((link, index) => (
        <SidebarLink props={link} key={index} />
      ))}
    </ul>
  )
}
