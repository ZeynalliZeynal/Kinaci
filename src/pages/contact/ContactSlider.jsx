
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { contactCarouselImages } from '~/data/contactCarouselImage';


export default function ContactSlider() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-60"
            >
                {contactCarouselImages.map(image => {
                    return <SwiperSlide>
                        <img src={image.src} alt="" />
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}