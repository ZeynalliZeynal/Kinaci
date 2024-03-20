import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '~/components/loader.jsx'
import ImgSlider from '~/pages/estate/estateItem/imgSlider/index.jsx'

export default function EstateItem() {
  const [estateItem, setEstateItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const { id } = useParams()

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

  const {
    title,
    location: { city, place },
  } = estateItem

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
                  <h2 className="text-5xl font-semibold">{title}</h2>
                  <p className="text-md">
                    {city}
                    {place && `/${place}`}
                  </p>
                </div>

                <ImgSlider
                  estateItem={estateItem}
                  imageIndex={imageIndex}
                  setImageIndex={setImageIndex}
                />
              </div>
              <div>salam</div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
