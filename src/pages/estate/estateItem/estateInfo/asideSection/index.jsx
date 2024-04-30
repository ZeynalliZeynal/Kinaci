import ButtonWithTooltip from '~/pages/estate/estateItem/estateInfo/asideSection/buttonWithTooltip/index.jsx'
import EstatePrice from '~/pages/estate/estateItem/estateInfo/asideSection/estatePrice/index.jsx'
import UserInfo from './userInfo'
import ContactIcons from '~/components/ContactIcons.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '~/data/consts.js'
import { Link } from 'react-router-dom'

export default function AsideSection({ estateItem }) {
  const [regions, setRegions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/selectInfo`)
        const data = await res.data

        setRegions(data.cities)
      } catch (error) {
        console.warn(error)
      }
    }

    fetchData()
  }, [])
  return (
    <aside className="px-2 mb-5 text-blue-900">
      <div className="container">
        <div className="grid gap-4">
          <div className="estate-id py-4 w-full text-orange-600 rounded-xl bg-orange-200 font-semibold flex justify-center">
            Əmlak nömrəsi: {estateItem?.id}
          </div>
          <EstatePrice estateItem={estateItem} />
          <ButtonWithTooltip />
          <UserInfo estateItem={estateItem} />
          <div className="print-hidden shadow-section rounded-xl p-[30px] bg-white">
            <h3 className="text-4xl font-semibold">Məzmunu Paylaşın</h3>
            <div className="flex justify-start w-full mt-2">
              <ContactIcons />
            </div>
          </div>
          <div className="shadow-section rounded-xl p-[30px] bg-white hidden md:block">
            <h3 className="text-4xl font-semibold">
              Digər Bölgələrdəki Əmlaklar
            </h3>
            <ul className="gap-2.5 flex-col text-md mt-5 justify-start">
              {regions.map((region, index) => (
                <li key={index} className="w-full justify-start">
                  <Link
                    to={`/estate?cities=${region.label}`}
                    className={
                      estateItem?.location.city === region.label
                        ? 'font-semibold'
                        : ''
                    }
                  >
                    {region.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
