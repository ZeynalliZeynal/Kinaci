import { motion } from 'framer-motion'
import { RxCheck } from 'react-icons/rx'

export default function DefaultCheckbox({ isChecked, setIsChecked }) {
  return (
    <button
      type="button"
      className="border border-blue-900/20 rounded-md size-5 hover:border-blue-900/70"
      onClick={setIsChecked}
    >
      <motion.span
        animate={isChecked ? 'checked' : 'initial'}
        variants={{
          initial: { scale: 0, opacity: 0 },
          checked: { scale: 1, opacity: 1 },
        }}
      >
        <RxCheck />
      </motion.span>
    </button>
  )
}
