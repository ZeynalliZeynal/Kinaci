import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function SwiperCarousel({
  estateItem,
  imageIndex,
  setImageIndex,
}) {
  const handleSlideChange = (swiper) => {
    setImageIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full h-full relative">
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#FF5300FF',
        }}
        className="w-full h-full"
        spaceBetween={10}
        direction={'horizontal'}
        slidesPerView={1}
        mousewheel={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        zoom={true}
        modules={[Navigation, Zoom, Mousewheel, Pagination]}
        onSlideChange={handleSlideChange}
      >
        {estateItem?.images.map((imgUrl, i) => (
          <SwiperSlide key={imgUrl}>
            <div className="swiper-zoom-container bg-neutral-300">
              <img
                src={imgUrl}
                alt={`Image ${i + 1}`}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-8 w-full grid justify-center z-50 text-blue-900">
        <div className="w-fit p-2 text-xs bg-white rounded-xl">
          <span>{imageIndex + 1}</span> /{' '}
          <span>{estateItem?.images.length}</span>
        </div>
      </div>
    </div>
  );
}
