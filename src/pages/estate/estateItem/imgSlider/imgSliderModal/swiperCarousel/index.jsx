import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

export default function SwiperCarousel({ estateItem }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <Swiper
      className="w-full h-full"
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[Thumbs]}
    >
      {estateItem?.assets?.img.map((imgUrl, i) => (
        <SwiperSlide key={imgUrl}>
          <img src={imgUrl} alt={`Image ${i + 1}`} className="object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
