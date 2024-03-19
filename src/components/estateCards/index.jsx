import cssImg from '~/assets/img/css.png'
import reactImg from '~/assets/img/react.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ActionBtns from '~/pages/home/newEstates/actionBtns/index.jsx'
import Details from '~/pages/home/newEstates/details/index.jsx'
import Dots from '~/pages/home/newEstates/dots/index.jsx'

const images = [
  {
    url: reactImg,
    alt: 'Image 1',
  },
  {
    url: cssImg,
    alt: 'Image 2',
  },
]

export default function EstateCards() {
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <div className="card bg-white p-4 rounded-selectBtn">
      <div className="card-head">
        <div className="card-img-slider-container flex overflow-hidden relative rounded-selectBtn">
          {images.map((image, index) => (
            <motion.div
              animate={{ x: `${-100 * imageIndex}%` }}
              key={index}
              className="card-img-slide shrink-0 w-full max-h-72 rounded"
            >
              <img src={image.url} alt={image.alt} />
            </motion.div>
          ))}
          <Dots
            images={images}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
        </div>
      </div>
      <div className="card-body text-blue-900">
        <h4 className="card-title text-md font-semibold py-5">
          Antalyada Qəşəng Mənzillər LEED Sertifikatlı Viva Defne Layihəsi
        </h4>
        <Details />
        <ActionBtns />
      </div>
    </div>
  )
}
