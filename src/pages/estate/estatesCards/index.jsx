import EstateCards from '~/components/estateCards/index.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NoProduct from '~/components/NoProduct.jsx'
import Lottie from 'lottie-react'
import animationData from '~/assets/img/loadMore.json'
import Loader from '~/components/loader.jsx'
import { useSearchParams } from 'react-router-dom'

const baseURL = 'https://kinaci-server.onrender.com/data/estates'
export default function EstatesCards() {
  const [searchParams] = useSearchParams()

  const [estates, setEstates] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [visibleItems, setVisibleItems] = useState(6)
  const [totalItems, setTotalItems] = useState(0)
  const [loadingMore, setLoadingMore] = useState(false)

  const handleLoadMore = () => {
    setLoadingMore(true)
    setVisibleItems((prevState) => prevState + 6)
  }

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        if (estates.length < 6) setIsLoading(true)
        const res = await axios.get(baseURL)
        const data = res.data

        const minConstructorDateParam = searchParams.get('minConstructorDate')
        const maxConstructorDateParam = searchParams.get('maxConstructorDate')
        const minConstructorDate = minConstructorDateParam
          ? parseFloat(minConstructorDateParam)
          : null
        const maxConstructorDate = maxConstructorDateParam
          ? parseFloat(maxConstructorDateParam)
          : null
        const filteredEstates = data.filter((estate) => {
          const constructorDate = new Date(
            estate.constructor_date,
          ).getFullYear()
          return (
            (minConstructorDate === null ||
              constructorDate >= minConstructorDate) &&
            (maxConstructorDate === null ||
              constructorDate <= maxConstructorDate) &&
            (searchParams.get('minPrice') === null ||
              estate.price >= searchParams.get('minPrice')) &&
            (searchParams.get('maxPrice') === null ||
              estate.price <= searchParams.get('maxPrice')) &&
            (searchParams.get('estateId') === null ||
              estate.id === +searchParams.get('estateId')) &&
            (searchParams.get('minSize') === null ||
              estate.area >= searchParams.get('minSize')) &&
            (searchParams.get('maxSize') === null ||
              estate.area <= searchParams.get('maxSize')) &&
            (searchParams.get('minFloor') === null ||
              estate.floorsgti >= searchParams.get('minFloor')) &&
            (searchParams.get('maxFloor') === null ||
              estate.floors <= searchParams.get('maxFloor')) &&
            (searchParams.get('minSeaDistance') === null ||
              estate.distances.sea >= searchParams.get('minSeaDistance')) &&
            (searchParams.get('maxSeaDistance') === null ||
              estate.distances.sea <= searchParams.get('maxSeaDistance')) &&
            (searchParams.get('minAirportDistance') === null ||
              estate.distances.airport >=
                searchParams.get('minAirportDistance')) &&
            (searchParams.get('maxAirportDistance') === null ||
              estate.distances.airport <=
                searchParams.get('maxAirportDistance'))
          )
        })

        setTotalItems(filteredEstates.length)
        setEstates(filteredEstates.slice(0, visibleItems))
      } catch (err) {
        console.warn(err)
      } finally {
        setIsLoading(false)
        setLoadingMore(false)
      }
    }
    fetchEstates()
  }, [estates.length, searchParams, visibleItems])
  return (
    <section className="py-[50px] text-blue-900">
      <div className="container">
        <div>
          <h2 className="text-4xl">Azərbaycanda daşınmaz əmlak</h2>
          <p className="text-sm mt-2.5">
            <b>{totalItems}</b> nəticə tapıldı.
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : estates.length ? (
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estates.map((estate) => (
              <EstateCards estate={estate} key={estate.id} />
            ))}
          </div>
        ) : (
          <NoProduct />
        )}{' '}
        {estates.length < totalItems && (
          <div className="flex justify-center my-8">
            {loadingMore ? (
              <span className="size-12">
                <Lottie animationData={animationData} />
              </span>
            ) : (
              <button
                onClick={handleLoadMore}
                className="px-4 py-3 rounded-xl hover:bg-orange-600 text-white font-semibold bg-orange-500"
              >
                Daha çox
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
