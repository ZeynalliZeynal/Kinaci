import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { initialState, reducer } from '~/reducers/searchBarReducer.js'
import SearchBarBtns from '~/components/search/searchBar/searchBarBtns/index.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SearchBarFilters from '~/components/search/searchBar/searchBarFilters/index.jsx'
import { baseURL } from '~/data/consts.js'

export default function SearchBar({ sellingType }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate(
      `/estate${sellingType ? `/${sellingType}` : ''}?${searchParams.toString()}`,
    )
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseURL}/data/selectInfo`)
        const data = await response.data
        dispatch({ type: 'SET_DATA', payload: data })
      } catch (err) {
        console.warn(err)
      }
    }

    fetchData()
  }, [])

  return (
    <form
      className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none"
      onSubmit={(e) => handleSubmit(e)}
    >
      <SearchBarFilters state={state} />

      <SearchBarBtns state={state} dispatch={dispatch} />
    </form>
  )
}
