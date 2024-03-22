import { GoPlay, GoZoomIn } from 'react-icons/go'
import PropTypes from 'prop-types'
import Features from './features'
import CardBadge from '~/components/estateCards/cardBadge/index.jsx'

export default function ImgSlider({ estateItem, imageIndex, setImageIndex }) {
  return (
    <div className="img-slider">
      <div className="img-container relative rounded overflow-hidden">
        <div className="img h-[530px] backdrop-blur-xl bg-blue-900/10">
          <img
            src={estateItem?.assets?.img[imageIndex]}
            alt="Carousel"
            className="object-contain"
          />
        </div>
        <div className="absolute top-4 left-4 text-5xl">
          <CardBadge estate={estateItem} />
        </div>
      </div>
      <div className="print-hidden w-full bg-gradient-to-b from-[#fefefe] to-[#ededed] text-[#039] text-xxs grid grid-cols-2 py-2">
        <button className="py-2.5 font-medium flex gap-2 border-r border-[#ddd]">
          <span className="size-4">
            <GoZoomIn />
          </span>
          Böyük Foto
        </button>
        <button className="py-2.5 font-medium flex gap-2 border-l border-white">
          <span className="size-4">
            <GoPlay />
          </span>
          Video
        </button>
      </div>
      <div className="print-hidden image-slider-buttons w-full grid">
        <ul className="w-full gap-2 overflow-x-scroll justify-start px-2 py-1.5">
          {estateItem?.assets?.img.map((imgURL, index) => (
            <li key={imgURL} className="shrink-0 grow-0">
              <button
                className={`w-[93px] h-[78px] rounded-xl overflow-hidden ${imageIndex !== index ? 'opacity-60' : ''}`}
                onClick={() => setImageIndex(index)}
              >
                <img src={imgURL} alt={`Image ${index + 1}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Features estateItem={estateItem} />
    </div>
  )
}

ImgSlider.propTypes = {
  estateItem: PropTypes.object,
  imageIndex: PropTypes.number,
  setImageIndex: PropTypes.func,
}
