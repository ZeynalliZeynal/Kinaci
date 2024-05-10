import { Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'
import { offerImagesCities, offersImagesTags } from '~/data/offersImages.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '~/data/consts.js'

export default function OffersSection() {
  const [estates, setEstates] = useState([])
  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/estates`)
        const data = res.data
        setEstates(data)
      } catch (err) {
        console.warn(err)
      }
    }

    fetchEstates()
  }, [])
  return (
    <section className="text-blue-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 w-full">
          <div className="space-y-2">
            <h2>Kateqoriyaya görə təkliflər</h2>
            <p className="text-sm">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <Link
            to="/estate"
            className="gap-2.5 px-[18px] py-2.5 rounded-xl bg-blue-500 text-white font-semibold h-fit text-md"
          >
            Tüm Teklifleri Gör{' '}
            <span className="size-4">
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="grid gap-4 lg:gap-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-8">
            {offersImagesTags.map(({ title, link, src }) => (
              <Link to={link} key={link} className="relative block group">
                <div className="rounded-xl overflow-hidden h-[260px] relative before:absolute before:z-10 before:inset-0 before:bg-blue-900/40">
                  <img
                    src={src}
                    alt={title}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute z-10 text-white top-[30px] left-[30px] space-y-2">
                  <h5 className="text-md font-semibold">{title}</h5>
                  <p className="text-xs">
                    {
                      estates.filter(
                        (estate) =>
                          estate.feature === link.slice(link.indexOf('=') + 1),
                      ).length
                    }{' '}
                    Mülk
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-4 lg:gap-8">
            {offerImagesCities.map(({ title, link, src }) => (
              <Link to={link} key={link} className="relative block group">
                <div className="rounded-xl overflow-hidden h-[260px] relative before:absolute before:z-10 before:inset-0 before:bg-blue-900/40">
                  <img
                    src={src}
                    alt={title}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute z-50 text-white top-[30px] left-[30px] space-y-2">
                  <h5 className="text-md font-semibold">{title}</h5>
                  <p className="text-xs">
                    {
                      estates.filter(
                        (estate) =>
                          estate.location.city ===
                          link.slice(link.indexOf('=') + 1),
                      ).length
                    }{' '}
                    Mülk
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
