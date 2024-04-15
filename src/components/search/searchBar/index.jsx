import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { initialState, reducer } from '~/reducers/searchBarReducer.js'
import SearchBarBtns from '~/components/search/searchBar/searchBarBtns/index.jsx'
import SearchBarFilters from '~/components/search/searchBar/searchBarFilters/index.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'

const baseURL = 'https://kinaci-server.onrender.com/data/selectInfo'

export default function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams({ ...initialState })

  const filter = searchParams.get('minPrice')
  console.log(filter)

  function handleSubmit(e) {
    e.preventDefault()

    navigate('/estate')
  }

  function handleClearFilter() {
    dispatch({ type: 'CLEAR_FILTER' })
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(baseURL)
        const data = await response.data
        dispatch({ type: 'SET_DATA', payload: data })
      } catch (err) {
        console.warn(err)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    // TODO: There is still a place value even if the city value is empty.
    const allPlaces = [].concat(...state.cityValue.map((city) => city.place))
    dispatch({ type: 'SET_VALUES', payload: { place: allPlaces } })
  }, [state.cityValue])

  return (
    <form
      className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none"
      onSubmit={(e) => handleSubmit(e)}
    >
      <SearchBarFilters state={state} dispatch={dispatch} />
      <SearchBarBtns
        state={state}
        handleClearFilter={handleClearFilter}
        dispatch={dispatch}
      />
    </form>
  )
}
