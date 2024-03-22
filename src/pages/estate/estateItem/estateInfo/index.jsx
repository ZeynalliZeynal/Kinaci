import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import Loader from '~/components/loader.jsx'
import LeftSection from '~/pages/estate/estateItem/estateInfo/leftSection'
import AsideSection from '~/pages/estate/estateItem/estateInfo/asideSection/index.jsx'

export default function EstateInfo() {
  const [isLoading, setIsLoading] = useState(false)
  const [estateItem, setEstateItem] = useState(null)

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
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="container">
            <div className="header mb-6 px-2">
              <h2 className="text-5xl font-semibold">{estateItem?.title}</h2>
              <p className="text-md">
                {estateItem?.location.city}{' '}
                {estateItem?.location.place && `/${estateItem?.location.place}`}
              </p>
            </div>
            <div id="printed-section" className="grid grid-cols-[8fr_4fr]">
              <LeftSection estateItem={estateItem} />
              <AsideSection estateItem={estateItem} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

EstateInfo.propTypes = {
  setIsLoading: PropTypes.func,
}
