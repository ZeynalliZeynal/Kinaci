import { contactLinks } from '~/data/navbar/contactLinks.jsx'

export default function ContactIcons() {
  return (
    <ul className="gap-0.5 md:gap-2">
      {contactLinks.map((link, index) => (
        <li
          className={`contact-icons rounded-full overflow-hidden ${link.type}`}
          key={index}
        >
          <a href="#" className="p-1 sm:p-2 rounded-full">
            <span className="size-[18px]">{link.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
