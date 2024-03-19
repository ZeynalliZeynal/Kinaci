import { useState } from 'react'
import { motion } from 'framer-motion'
import ActionBtns from '~/components/estateCards/actionBtns'
import Details from '~/components/estateCards/details'
import Dots from '~/components/estateCards/dots'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import CardBadge from '~/components/estateCards/cardBadge/index.jsx'

export default function EstateCards({ estate }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const { preview } = estate.assets

  const navigate = useNavigate()

  return (
    <div className="card bg-white p-4 rounded-selectBtn hover:shadow-lg transition-shadow">
      <div className="card-head">
        <div className="card-img-slider-container flex overflow-hidden relative rounded-selectBtn">
          {preview.map((image, index) => (
            <motion.div
              animate={{ x: `${-100 * imageIndex}%` }}
              key={index}
              className="card-img-slide shrink-0 w-full h-72 rounded cursor-pointer"
              onClick={() => navigate(`estate/${estate.id}`)}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </motion.div>
          ))}
          <Dots
            images={preview}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
          <button
            className="absolute top-2 left-2"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            <motion.svg
              className="outline-none"
              whileTap={{ scale: 0.85 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z"
                stroke="#e21717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                animate={isActive ? 'hovering' : 'initial'}
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hovering: { scale: 1, opacity: 1 },
                }}
                d="M20.4578 5.41452C19.9691 4.96607 19.3889 4.61034 18.7503 4.36763C18.1117 4.12492 17.4272 4 16.7359 4C16.0446 4 15.3601 4.12492 14.7215 4.36763C14.0829 4.61034 13.5026 4.96607 13.0139 5.41452L11.9997 6.34476L10.9855 5.41452C9.99842 4.50912 8.6596 4.00047 7.26361 4.00047C5.86761 4.00047 4.52879 4.50912 3.54168 5.41452C2.55456 6.31992 2 7.5479 2 8.82833C2 10.1088 2.55456 11.3367 3.54168 12.2421L4.55588 13.1724L11.9997 20L19.4436 13.1724L20.4578 12.2421C20.9467 11.7939 21.3346 11.2617 21.5992 10.676C21.8638 10.0902 22 9.46237 22 8.82833C22 8.19428 21.8638 7.56645 21.5992 6.9807C21.3346 6.39494 20.9467 5.86275 20.4578 5.41452Z"
                fill="#e21717"
              />
            </motion.svg>
          </button>
          {estate.feature && <CardBadge estate={estate} />}
          <span className="rounded-button absolute bottom-2 left-2 bg-orange-500 text-white text-md font-medium px-3 py-1">
            KNC-{estate.id}
          </span>
        </div>
      </div>
      <div className="card-body text-blue-900">
        <h4 className="card-title text-md font-semibold py-5">
          {estate.title}
        </h4>
        <Details />
        <ActionBtns />
      </div>
    </div>
  )
}

EstateCards.propTypes = {
  estate: PropTypes.object,
}
