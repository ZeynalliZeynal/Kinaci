import { links } from '~/data/footer/links.jsx'
import { Link } from 'react-router-dom'

export default function FooterLinks() {
  return (
    <ul className="list-disc flex-col items-start">
      {links.map((link, i) => (
        <li
          key={i}
          className='relative before:absolute before:content-[""] before:w-1.5 before:h-1.5 before:bg-white ps-3 before:right-full before:rounded-full hover:text-orange-500 hover:ps-4 transition-all'
        >
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
