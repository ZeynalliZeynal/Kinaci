import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

export default function ModalCloseBtn({ onClose, inset = false }) {
  return (
    <button
      className="size-12 bg-orange-500 rounded-xl absolute top-5 right-5 group"
      onClick={onClose}
    >
      <motion.span
        whileHover={{ rotate: 90 }}
        className="size-12 text-white p-2"
      >
        <IoClose />
      </motion.span>
    </button>
  )
}
