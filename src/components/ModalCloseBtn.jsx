import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'

export default function ModalCloseBtn({ onClose, inset = false }) {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <button
      className="size-12 bg-orange-500 rounded-full absolute -top-5 -right-5 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClose}
    >
      <motion.span
        animate={isHovering ? 'hovering' : 'initial'}
        variants={{
          hovering: {
            rotate: 90,
          },
          initial: {
            rotate: 0,
          },
        }}
        className="size-6 text-white"
      >
        <IoClose />
      </motion.span>
    </button>
  )
}
