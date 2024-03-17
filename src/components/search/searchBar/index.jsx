import Select from '~/components/search/searchBar/select/index.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'https://kinaci-server.onrender.com/data/selectInfo'

export default function SearchBar() {
  const [estateTypes, setEstateTypes] = useState([])
  const [valueMultiple, setValueMultiple] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(baseURL)
        const data = await response.data
        setEstateTypes(data.estateTypes)
      } catch (err) {
        console.warn(err)
      }
    }

    fetchData()
  }, [])
  return (
    <form className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none">
      <div className="flex">
        <div className="flex w-1/3">
          <div className="w-full">
            <label className="cursor-default text-sm mb-3 inline-block">
              Əmlak növü
            </label>
            <Select
              multiple
              value={valueMultiple}
              options={estateTypes}
              onChange={(option) => setValueMultiple(option)}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
