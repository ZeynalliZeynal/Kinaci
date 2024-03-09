import SelectCountry from '~/components/search/selectCountry/index.jsx'
import { useState } from 'react'
import classNames from 'classnames'

export default function SearchContainer() {
  const [activeButton, setActiveButton] = useState('all')

  function handleSetActive(btnValue) {
    setActiveButton(btnValue.dataset.label)
  }

  return (
    <div className="search-container relative w-fit grid gap-5">
      <SelectCountry />
    </div>
  )
}
