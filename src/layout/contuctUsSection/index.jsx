import { BsTelephoneFill } from 'react-icons/bs'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { adminInfo } from '~/data/adminInfo'
import { Link } from 'react-router-dom'

export default function ContuctUsSection() {
  return (
    <section className="bg-orange-100 py-[50px] text-blue-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="grid gap-3 text-center sm:text-start">
            <h2 className="text-h2 font-semibold">
              Kömək lazımdır? Mütəxəssisimizlə danışın.
            </h2>
            <p className="text-sm">
              Mütəxəssislərimizlə danışın və ya daha çox mülkə baxın.
            </p>
          </div>
          <div className="text-white font-medium flex flex-col sm:flex-row gap-8 items-center ">
            <Link
              to="/contact"
              className="bg-white border text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl px-8 py-5 h-fit gap-3"
            >
              Bizimlə əlaqə saxlayın
              <span className="size-4">
                <FaArrowUpRightFromSquare />
              </span>
            </Link>
            <a
              href={`tel:${adminInfo.tel}`}
              className="bg-orange-500 border text-white hover:bg-orange-600 rounded-xl px-8 py-5 h-fit gap-3"
            >
              <span className="size-4">
                <BsTelephoneFill />
              </span>
              {adminInfo.tel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
