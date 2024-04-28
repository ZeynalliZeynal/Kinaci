import { motion } from 'framer-motion'
import { bannerCarouselImages as images } from '~/data/bannerCarouselImages.js'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Dots from '~/components/estateCards/Dots.jsx'
import { useTranslation } from 'react-i18next'
import { useSwapSlide } from '~/hooks/useSwapSlide.js'

export default function Carousel() {
  const { t } = useTranslation()

  const [handlePrev, handleNext, imageIndex, setImageIndex] = useSwapSlide(
    images.length,
  )

  return (
    <section className="overflow-hidden">
      <div className="flex relative">
        {images.map(({ src, title, desc }) => (
          <motion.div
            animate={{ x: `${-100 * imageIndex}%` }}
            key={src}
            className="flex shrink-0 h-[500px] w-full justify-center items-center"
            style={{
              backgroundImage: `url(${src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-blue-900/60 z-10" />
            <div className="text-white text-center relative z-20 max-w-[600px] md:px-0 px-16">
              <h1 className="text lg:text-h1 md:text-[40px] sm:text-[30px] text-5xl">
                {t(title)}
              </h1>
              <p className="text-md">{t(desc)}</p>
            </div>
          </motion.div>
        ))}

        <div className="container inset-0 absolute flex justify-between text-white items-center z-20">
          <button
            className="size-[55px] border border-white rounded-full p-3"
            onClick={handlePrev}
          >
            <BsChevronLeft />
          </button>
          <button
            className="size-[55px] border border-white rounded-full p-3"
            onClick={handleNext}
          >
            <BsChevronRight />
          </button>
        </div>
        <div className="absolute bottom-20 w-full flex justify-center z-[60]">
          <Dots
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            size={images.length}
          />
        </div>
      </div>
    </section>
  )
}
