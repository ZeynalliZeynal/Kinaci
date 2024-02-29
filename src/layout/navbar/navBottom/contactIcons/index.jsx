import { contactLinks } from '~/data/navbar/contactLinks.jsx'

export default function ContactIcons() {
  return (
    <ul className="justify-end gap-0.5 md:gap-2">
      {contactLinks.map((link, index) => (
        <li
          className={`p-2 rounded-full hover:bg-icons-${link.type} group transition-colors`}
          key={index}
        >
          <a
            href="#"
            className={`size-[18px] text-icons-${link.type} group-hover:text-white`}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
