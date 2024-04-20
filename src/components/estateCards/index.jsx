import { useState } from 'react'
import { motion } from 'framer-motion'
import ActionBtns from '~/components/estateCards/ActionBtns.jsx'
import Details from '~/components/estateCards/Details.jsx'
import Dots from '~/components/estateCards/Dots.jsx'
import { useNavigate } from 'react-router-dom'
import CardBadge from '~/components/estateCards/CardBadge.jsx'
import HeartBtn from '~/components/HeartBtn.jsx'

export default function EstateCards({ estate }) {
  const [imageIndex, setImageIndex] = useState(0)

  const { preview } = estate.assets

  const navigate = useNavigate()

  return (
    <div className="card bg-white p-4 rounded-selectBtn hover:shadow-lg hover:-translate-y-2 transition-all grid">
      <div className="card-head">
        <div className="card-img-slider-container flex overflow-hidden relative rounded-selectBtn">
          {preview.map((image, index) => (
            <motion.div
              animate={{ x: `${-100 * imageIndex}%` }}
              key={index}
              className="card-img-slide shrink-0 w-full h-72 rounded cursor-pointer"
              onClick={() =>
                navigate(`/estate/${estate?.selling_type}/${estate?.id}`)
              }
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </motion.div>
          ))}{' '}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <Dots
              size={preview.length}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
          </div>
          <span className="absolute top-2 left-2">
            <HeartBtn />
          </span>{' '}
          {estate.feature && (
            <span className="absolute top-2 right-2 text-md">
              <CardBadge estate={estate} />
            </span>
          )}{' '}
          <span className="rounded-button absolute bottom-2 left-2 bg-orange-500 text-white text-md font-medium px-3 py-1">
            KNC-{estate.id}
          </span>
        </div>
      </div>
      <div className="card-body text-blue-900 grid">
        <h4 className="card-title text-md font-semibold py-5">
          {estate.title}
        </h4>
        <Details estate={estate} />
        <ActionBtns estateItem={estate} />
      </div>
    </div>
  )
}
