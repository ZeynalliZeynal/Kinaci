import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export default function Dots({ images, imageIndex, setImageIndex }) {
  return (
    <div className="dots absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: images.length }, (_, index) => (
        <button
          key={index}
          onClick={() => setImageIndex(index)}
          className="size-5 text-white origin-center hover:scale-125"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              animate={
                index === imageIndex
                  ? {
                      scale: 1,
                    }
                  : {
                      scale: 0,
                    }
              }
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="4"
            />
            <circle cx="32" cy="32" r="20" fill="currentColor" />
          </svg>
        </button>
      ))}
    </div>
  )
}

Dots.propTypes = {
  images: PropTypes.array,
  imageIndex: PropTypes.number,
  setImageIndex: PropTypes.func,
}
