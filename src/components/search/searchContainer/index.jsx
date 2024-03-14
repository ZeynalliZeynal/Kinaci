import SelectCountry from '~/components/search/selectCountry/index.jsx'
import { useState } from 'react'
import SelectTabBtns from '~/components/search/selectTabBtns/index.jsx'
import LinkBtns from '~/components/search/linkBtns/index.jsx'

export default function SearchContainer() {
  return (
    <div className="search-container relative grid gap-5">
      <SelectCountry />
      <div className="flex justify-between w-full text-sm">
        <SelectTabBtns />
        <LinkBtns />
      </div>
    </div>
  )
}
