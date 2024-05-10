import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/zoom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
import { Zoom } from 'swiper/modules'
import { baseURL } from '~/data/consts.js'

export default function Certificates() {
  const [certificates, setCertificates] = useState([])
  const swiperRef = useRef(null)
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/certificates`)
        const data = await res.data
        setCertificates(data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchCertificates()
  }, [])

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  return (
    <section className="my-[50px] text-blue-900">
      <div className="container">
        <div className="grid md:grid-cols-2 md:pe-8 grid-cols-1 gap-8">
          <div className="grid gap-8 w-full">
            <h2>Sertifikatlarımız</h2>
            <p>
              Hər il minlərlə xarici vətəndaş Azərbaycanın daşınmaz əmlakını
              alır. Bu baxımdan etibarlı bir şirkət seçmək prinsipial əhəmiyyət
              kəsb edir. Kınacı Qrupu keyfiyyət və peşəkarlığa diqqət yetirir.
              <br />
              <br />
              Qüsursuz iş təkcə dünyada bir çox müştərilərin müsbət rəyləri ilə
              deyil, həm də sertifikatların mövcudluğu ilə təsdiqlənir.
              <br />
              <br />
              Bunlar etibarlı tərəfdaşlığın, dürüstlüyün və bizim tərəfimizdən
              bağlanmış bütün müqavilələrə uyğunluğun təminatıdır.
            </p>
          </div>
          <div className="md:ps-8 w-full">
            <div className="md:ps-8">
              <Swiper
                ref={swiperRef}
                slidesPerView={2}
                spaceBetween={32}
                zoom={true}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                modules={[Zoom]}
              >
                {certificates.map((c) => (
                  <SwiperSlide key={c.id} className="">
                    <span className="swiper-zoom-container h-[400px]">
                      <img src={c.src} alt={c.title} />
                    </span>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex w-full text-blue-900 justify-center items-center my-4 gap-4">
                <button
                  className="border border-transparent rounded-full p-2 hover:border-blue-900 swiper-button-prev"
                  onClick={handlePrevSlide}
                >
                  <span className="size-6">
                    <TiChevronLeft />
                  </span>
                </button>
                <button
                  className="border border-transparent rounded-full p-2 hover:border-blue-900 swiper-button-next"
                  onClick={handleNextSlide}
                >
                  <span className="size-6">
                    <TiChevronRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
