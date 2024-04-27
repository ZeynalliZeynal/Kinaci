import SearchContainer from '~/components/search/searchContainer/index.jsx'
import SearchBar from '~/components/search/searchBar/index.jsx'
import { useState } from 'react'

export default function Search() {
  const [sellingType, setSellingType] = useState(undefined)
  return (
    <div className="container py-5">
      <SearchContainer setSellingType={setSellingType} />
      <SearchBar sellingType={sellingType} />
    </div>
  )
}
