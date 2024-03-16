import Select from '~/components/search/searchBar/select/index.jsx'

export default function SearchBar() {
  return (
    <form className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none">
      <div className="flex">
        <Select />
      </div>
    </form>
  )
}
