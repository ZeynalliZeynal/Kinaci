import { contactLinks } from '~/data/navbar/contactLinks.jsx'

export default function ContactIcons() {
  return (
    <ul className="justify-end gap-0.5 md:gap-2">
      {contactLinks.map((link, index) => (
        <li
          className={`contact-icons p-2 rounded-full ${link.type}`}
          key={index}
        >
          <a href="#" className={`size-[18px]`}>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
