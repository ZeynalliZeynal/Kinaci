import { IoIosSearch } from 'react-icons/io'
import CategorySectionContainer from '~/pages/blog/categories/CategorySectionContainer.jsx'
import { useSearchParams } from 'react-router-dom'

export default function CategoriesSearch() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (value) => {
    setSearchParams(
      (prev) => {
        if (value === null || value === '') prev.delete('blogTitle')
        else prev.set('blogTitle', value)
        return prev
      },
      { replace: true },
    )
  }
  return (
    <CategorySectionContainer>
      <span className="transition-colors rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-sm">
        <div className="flex p-2.5 h-[50px] items-center gap-2">
          <span className="size-6">
            <IoIosSearch />
          </span>
          <input
            type="text"
            name="search"
            value={searchParams.get('blogTitle') || ''}
            className="placeholder:text-[#6c757d]"
            placeholder="Nə axtarırsan?"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </span>
    </CategorySectionContainer>
  )
}
