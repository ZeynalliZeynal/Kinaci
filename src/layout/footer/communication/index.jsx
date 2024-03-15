import { communicationLinks } from '~/data/footer/communicationLinks.jsx'
import { Link } from 'react-router-dom'

export default function CommunicationLinks() {
  return (
    <ul className="flex-col items-start gap-4">
      {communicationLinks.map((link, i) => (
        <li key={i} className="text-white hover:text-orange-500 gap-3">
          <span className="size-[18px]">{link.icon}</span>{' '}
          {link.to ? (
            <Link to={link.to}>{link.text}</Link>
          ) : (
            <a href={link.link}>{link.text}</a>
          )}
        </li>
      ))}
    </ul>
  )
}
