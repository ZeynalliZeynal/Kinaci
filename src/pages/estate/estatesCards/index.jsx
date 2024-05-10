import EstateCards from '~/components/estateCards'
import { useEffect, useReducer, useState } from 'react'
import NoProduct from '~/components/NoProduct'
import Lottie from 'lottie-react'
import animationData from '~/assets/img/loadMore.json'
import Loader from '~/components/loader.jsx'
import { useSearchParams } from 'react-router-dom'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa'
import Select from '~/components/search/searchBar/select'
import { sortSelect } from '~/data/sortSelect'
import { useFilteredEstates } from '~/hooks/useFilteredEstates'
import { initialState, reducer } from '~/reducers/estatesCardsReducer'

export default function EstatesCards() {
  const [
    { value, estates, isLoading, loadMore, visibleItems, totalItems, isListed },
    dispatch,
  ] = useReducer(reducer, initialState)
  const [searchParams] = useSearchParams()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useFilteredEstates(estates, dispatch, searchParams, visibleItems)
  const handleLoadMore = () => {
    dispatch({ type: 'SET_LOADING_MORE', payload: true })
    dispatch({ type: 'SET_VISIBLE_ITEMS' })
  }

  useEffect(() => {
    const isListedStored = localStorage.getItem('isListed')
    if (isListedStored)
      dispatch({
        type: 'SET_LISTED',
        payload: JSON.parse(isListedStored),
      })
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth <= 767)
      dispatch({
        type: 'SET_LISTED',
        payload: false,
      })
  }, [windowWidth])

  return (
    <section className="py-[50px] text-blue-900 bg-gray-100">
      <div className="container">
        <div className="mb-7 grid grid-cols-1 lg:flex justify-between gap-4">
          <div>
            <h2 className="text-4xl">Azərbaycanda daşınmaz əmlak</h2>
            <p className="text-sm mt-2.5">
              {typeof totalItems === 'string' ? (
                <b>{totalItems}</b>
              ) : (
                <>
                  <b>{totalItems}</b> nəticə tapıldı.
                </>
              )}
            </p>
          </div>
          <div className="grid sm:flex h-fit gap-2 text-sm items-center">
            <div className="items-center gap-4 hidden md:flex">
              <span>Siyahı Tipi:</span>
              <span className="flex bg-white rounded-xl px-[14px] py-2.5 gap-3">
                <button
                  className="size-5 text-orange-500 hover:drop-shadow-lg transition-all"
                  onClick={() => {
                    dispatch({
                      type: 'SET_LISTED',
                      payload: false,
                    })

                    localStorage.setItem('isListed', JSON.stringify(false))
                  }}
                >
                  <BsFillGrid3X3GapFill />
                </button>
                <button
                  className={`size-5 text-orange-500 hover:drop-shadow-lg transition-all`}
                  onClick={() => {
                    dispatch({
                      type: 'SET_LISTED',
                      payload: true,
                    })
                    localStorage.setItem('isListed', JSON.stringify(true))
                  }}
                >
                  <FaList />
                </button>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Nəticələri sırala:</span>
              <Select options={sortSelect} value={value} property="sortBy" />
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : estates.length ? (
          <div
            className={`grid items-stretch gap-8 ${isListed ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '}`}
          >
            {estates.map((estate) => (
              <EstateCards
                estate={estate}
                key={estate.id}
                isListed={isListed}
              />
            ))}
          </div>
        ) : (
          <NoProduct />
        )}{' '}
        {estates.length < totalItems && (
          <div className="flex justify-center my-8">
            {loadMore ? (
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
