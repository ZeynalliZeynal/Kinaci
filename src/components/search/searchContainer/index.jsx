import SelectTabBtns from '~/components/search/selectTabBtns'
import LinkBtns from '~/components/search/linkBtns'

export default function SearchContainer({ setSellingType }) {
  return (
    <div className="search-container relative grid gap-5">
      {/*<SelectCountry />*/}
      <div className="flex justify-between w-full text-sm relative z-[70]">
        <SelectTabBtns setSellingType={setSellingType} />
        <LinkBtns />
      </div>
    </div>
  )
}
