import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Cookies() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <motion.div
      animate={isOpen ? 'initial' : 'hidden'}
      variants={{
        initial: {
          translateX: 0,
        },
        hidden: {
          translateX: '100%',
          opacity: 0,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed z-[1500] bottom-5 text-white w-full flex justify-center"
    >
      <div className="bg-blue-900/90 rounded-[60px] text-sm overflow-hidden flex">
        <span className="py-5 px-7">
          Kınacı Properties sayt trafikini təhlil etmək üçün xidmətlər təqdim
          edir və kukilərdən istifadə edir.
        </span>
        <button
          className="py-5 px-7 font-semibold bg-blue-900 hover:bg-blue-900/90"
          onClick={() => setIsOpen(false)}
        >
          OK
        </button>
      </div>
    </motion.div>
  )
}
