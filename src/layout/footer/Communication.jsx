import { communicationLinks } from '~/data/footer/communicationLinks.jsx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CommunicationLinks() {
  const [isHovering, setIsHovering] = useState(-1)

  return (
    <ul className="flex-col items-start gap-4">
      {communicationLinks.map((link, i) => (
        <li
          key={i}
          className="text-white hover:text-orange-500 gap-3"
          onMouseEnter={() => setIsHovering(i)}
          onMouseLeave={() => setIsHovering(-1)}
        >
          <motion.span
            animate={isHovering === i ? 'hovering' : 'initial'}
            variants={link.variants}
            className="size-[18px]"
          >
            {link.icon}
          </motion.span>{' '}
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
