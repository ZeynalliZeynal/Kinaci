import { MdOutlineEmojiObjects } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { TfiSupport } from 'react-icons/tfi'

export default function VideoSection() {
  return (
    <section className="max-w-[1600px] rounded-lg bg-orange-100 mx-auto py-0 my-[50px]">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="py-10">
            <h2>Gəlin sizə uyğun olanı tapaq...</h2>
            <ul className="justify-start grid gap-8 pt-[70px]">
              <li className="grid grid-cols-[90px_1fr]">
                <span className="w-[30px] mx-auto">
                  <MdOutlineEmojiObjects />
                </span>
                <div className="grid gap-3">
                  <span className="font-semibold">
                    Obyektlərin fərdi seçimi
                  </span>
                  <span className="text-sm">Sizin üçün ən yaxşı əmlak</span>
                </div>
              </li>
              <li className="grid grid-cols-[90px_1fr]">
                <span className="w-[30px] mx-auto">
                  <RiServiceLine />
                </span>
                <div className="grid gap-3">
                  <span className="font-semibold">Satış sonrası xidmət</span>
                  <span className="text-sm">
                    Biz həmçinin satış sonrası dəstəyi də təmin edirik!
                  </span>
                </div>
              </li>
              <li className="grid grid-cols-[90px_1fr]">
                <span className="w-[30px] mx-auto">
                  <TfiSupport />
                </span>
                <div className="grid gap-3">
                  <span className="font-semibold">
                    Əməliyyat mərhələsində dəstək
                  </span>
                  <span className="text-sm">Bu prosesdə tək deyilsiniz!</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full lg:h-full overflow-hidden rounded-tr-2xl rounded-br-2xl h-[500px]">
            <iframe
              src="https://www.youtube.com/embed/X6h0rmZZpI4?si=UlONVdYFwHTHs2Oi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
