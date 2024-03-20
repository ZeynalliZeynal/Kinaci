import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '~/components/loader.jsx'
import { GoPlay, GoZoomIn } from 'react-icons/go'

export default function EstateItem() {
  const [estateItem, setEstateItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchEstateItem = async () => {
      try {
        setIsLoading(true)

        const response = await axios.get(
          `https://kinaci-server.onrender.com/data/estates/${id}`,
        )
        setIsLoading(false)
        setEstateItem(response.data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchEstateItem()
  }, [id])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="container">
            <div className="grid grid-cols-[8fr_4fr]">
              <div className="grid gap-3 text-blue-900">
                <div className="header">
                  <h2 className="text-5xl font-semibold">
                    {estateItem?.title}
                  </h2>
                  <p className="text-md">{estateItem?.location.city}</p>
                </div>
                <div className="slider w-full">
                  <div className="img-container">
                    <img
                      src={estateItem?.assets?.img[imageIndex]}
                      alt="Carousel"
                    />
                  </div>
                  <div className="w-full bg-gradient-to-b from-[#fefefe] to-[#ededed] text-[#039] grid grid-cols-2 py-2">
                    <button className="py-2.5 font-medium flex gap-2 border-r border-[#ddd]">
                      <span className="size-4">
                        <GoZoomIn />
                      </span>
                      Böyük Foto
                    </button>
                    <button className="py-2.5 font-medium flex gap-2 border-l border-white">
                      <span className="size-4">
                        <GoPlay />
                      </span>
                      Video
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
