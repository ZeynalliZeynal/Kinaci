import { useEffect } from 'react'
import axios from 'axios'

const baseURL = 'https://kinaci-server.onrender.com/data/estates'
export const useFilteredEstates = (
  estates,
  dispatch,
  searchParams,
  visibleItems,
) => {
  useEffect(() => {
    const fetchEstates = async () => {
      try {
        if (estates.length < 6) dispatch({ type: 'SET_LOADING', payload: true })
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
              estate.floors >= searchParams.get('minFloor')) &&
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

        dispatch({ type: 'SET_TOTAL_ITEMS', payload: filteredEstates.length })
        dispatch({
          type: 'SET_ESTATES',
          payload: filteredEstates.slice(0, visibleItems),
        })
        dispatch({ type: 'SET_LOADING_MORE', payload: false })
      } catch (err) {
        console.warn(err)
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false })
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }
    fetchEstates()
  }, [estates.length, searchParams, visibleItems])
}
