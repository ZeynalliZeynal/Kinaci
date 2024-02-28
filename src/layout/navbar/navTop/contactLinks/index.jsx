import { links } from '~/data/navbar.jsx'
import ContactLink from './contactLink'

export default function ContactLinks() {
  return (
    <ul className="gap-2.5 hidden xl:flex">
      {links.map((link, index) => (
        <ContactLink data={link} key={index} />
      ))}
    </ul>
  )
}
