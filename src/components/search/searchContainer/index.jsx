import SelectCountry from '~/components/search/selectCountry/index.jsx'
import { useState } from 'react'
import SelectTabBtns from '~/components/search/selectTabBtns/index.jsx'

export default function SearchContainer() {
  return (
    <div className="search-container relative w-fit grid gap-5">
      <SelectCountry />
      <SelectTabBtns />
    </div>
  )
}
