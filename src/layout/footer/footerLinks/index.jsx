import { links } from '~/data/footer/links.jsx'
import { Link } from 'react-router-dom'

export default function FooterLinks() {
  return (
    <ul className="list-disc flex-col items-start mt-8 ps-2">
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
