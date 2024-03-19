import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '~/components/loader.jsx'

export default function EstateItem() {
  const [estateItem, setEstateItem] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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
            <div className="grid grid-cols-[7fr_5fr]">
              <div className="grid gap-3 text-blue-900">
                <h2 className="text-5xl font-semibold">{estateItem?.title}</h2>
                <p className="text-md">{estateItem?.location.city}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
