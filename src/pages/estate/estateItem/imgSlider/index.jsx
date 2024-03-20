import { GoPlay, GoZoomIn } from 'react-icons/go'
import PropTypes from 'prop-types'
import Features from './features'

export default function ImgSlider({ estateItem, imageIndex, setImageIndex }) {
  const {
    assets: { img },
  } = estateItem
  return (
    <div className="img-slider">
      <div className="img-container aspect-video rounded overflow-hidden">
        <img src={img[imageIndex]} alt="Carousel" />
      </div>
      <div className="w-full bg-gradient-to-b from-[#fefefe] to-[#ededed] text-[#039] grid grid-cols-2 py-2">
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
      <div className="image-slider-buttons w-full grid">
        <ul className="w-full gap-2 overflow-x-scroll justify-start px-2 py-1.5">
          {img.map((imgURL, index) => (
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
