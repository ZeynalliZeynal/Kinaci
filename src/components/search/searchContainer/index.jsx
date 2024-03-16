import SelectCountry from '~/components/search/selectCountry'
import SelectTabBtns from '~/components/search/selectTabBtns'
import LinkBtns from '~/components/search/linkBtns'

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
