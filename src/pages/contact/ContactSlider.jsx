// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { contactCarouselImages } from '~/data/contactCarouselImage';
import { useRef } from 'react';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

export default function ContactSlider() {
  const swiperRef = useRef(null);
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <section>
      <div className="container max-w-full">
        <Swiper
          ref={swiperRef}
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper h-60 my-5 relative"
        >
          {contactCarouselImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image.src} alt={`Image #${index + 1}`} />
              </SwiperSlide>
            );
          })}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 swiper-button-prev hover:bg-white z-50 text-blue-900 bg-white/50"
            onClick={handlePrevSlide}
          >
            <span className="size-6">
              <TiChevronLeft />
            </span>
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full p-2 swiper-button-next hover:bg-white z-50 text-blue-900 bg-white/50"
            onClick={handleNextSlide}
          >
            <span className="size-6">
              <TiChevronRight />
            </span>
          </button>
        </Swiper>
      </div>
    </section>
  );
}
